const root = document.documentElement
const densitySelect = document.querySelector('#density-select')
const crtToggle = document.querySelector('#crt-toggle')
const revokeDialog = document.querySelector('#revoke-dialog')
const openDialogButton = document.querySelector('#open-dialog')
const toastButton = document.querySelector('#toast-demo')
const toastRegion = document.querySelector('#toast-region')
const commandFilter = document.querySelector('#command-filter')
const commandItems = [...document.querySelectorAll('.magi-command__item')]
const profileForm = document.querySelector('#profile-form')

const savedDensity = localStorage.getItem('magi-preview-density') || 'compact'
const savedEffects = localStorage.getItem('magi-preview-effects') || 'flat'

root.dataset.magiDensity = savedDensity
root.dataset.magiEffects = savedEffects
densitySelect.value = savedDensity
crtToggle.checked = savedEffects === 'crt'

densitySelect.addEventListener('change', () => {
  root.dataset.magiDensity = densitySelect.value
  localStorage.setItem('magi-preview-density', densitySelect.value)
})

crtToggle.addEventListener('change', () => {
  const mode = crtToggle.checked ? 'crt' : 'flat'
  root.dataset.magiEffects = mode
  localStorage.setItem('magi-preview-effects', mode)
})

profileForm.addEventListener('submit', (event) => event.preventDefault())

openDialogButton.addEventListener('click', () => revokeDialog.showModal())

revokeDialog.addEventListener('close', () => {
  if (revokeDialog.returnValue === 'revoke') {
    showToast('Session revoked', 'The selected device must authenticate again.', 'danger')
  }
})

toastButton.addEventListener('click', () => {
  showToast('Vault synchronized', '42 changes reached the server.', 'success')
})

function showToast(title, copy, tone = 'success') {
  const toast = document.createElement('div')
  toast.className = 'magi-toast'
  toast.dataset.tone = tone
  toast.setAttribute('role', tone === 'danger' ? 'alert' : 'status')
  toast.innerHTML = `
    <span class="magi-status" data-tone="${tone}" aria-hidden="true"></span>
    <div><strong>${title}</strong><p class="magi-meta">${copy}</p></div>
    <button class="magi-icon-button" data-size="sm" data-variant="ghost" type="button" aria-label="Dismiss notification">×</button>
  `
  toast.querySelector('button').addEventListener('click', () => toast.remove())
  toastRegion.append(toast)
  setTimeout(() => toast.remove(), 5000)
}

const tabs = [...document.querySelectorAll('[role="tab"]')]

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab))
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    let nextIndex = index
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = tabs.length - 1
    tabs[nextIndex].focus()
    selectTab(tabs[nextIndex])
  })
})

function selectTab(selectedTab) {
  tabs.forEach((tab) => {
    const selected = tab === selectedTab
    tab.setAttribute('aria-selected', String(selected))
    tab.tabIndex = selected ? 0 : -1
    document.querySelector(`#${tab.getAttribute('aria-controls')}`).hidden = !selected
  })
}

commandFilter.addEventListener('input', () => {
  const query = commandFilter.value.trim().toLowerCase()
  commandItems.forEach((item) => {
    item.hidden = !item.textContent.toLowerCase().includes(query)
  })
})

const navLinks = [...document.querySelectorAll('.showcase-sidebar .magi-nav__item')]
const sections = navLinks.map((link) => document.querySelector(link.hash))

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
  if (!visible) return
  navLinks.forEach((link) => {
    if (link.hash === `#${visible.target.id}`) link.setAttribute('aria-current', 'page')
    else link.removeAttribute('aria-current')
  })
}, { rootMargin: '-15% 0px -70% 0px', threshold: [0, 0.25, 0.5] })

sections.forEach((section) => observer.observe(section))
