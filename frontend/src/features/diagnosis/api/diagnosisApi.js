function resolveDiagnosisApiUrl() {
  return import.meta?.env?.VITE_DIAGNOSIS_API_URL || ''
}

async function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export async function analyzeDiagnosisRemotely(file, checkpoint = 'convnext_small_focal_fold1.pth', modelType = 'classification') {
  const baseUrl = resolveDiagnosisApiUrl()
  const apiUrl = baseUrl || '/diagnosis'
  const imageDataUrl = await fileToDataUrl(file)
  const payload = {
    imageDataUrl,
    checkpoint,
    modelType,
  }

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const text = await res.text()
  const isJson = (res.headers.get('content-type') || '').includes('application/json')
  const data = isJson && text ? JSON.parse(text) : {}

  if (!res.ok) {
    throw new Error(data?.message || `Diagnosis request failed: ${res.status}`)
  }

  return data
}

