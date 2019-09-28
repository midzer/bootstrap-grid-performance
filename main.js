// Show render time
if (window.PerformanceNavigationTiming) {
    const [entry] = window.performance.getEntriesByType('navigation')
    const rendertime = document.getElementById('rendertime')
    rendertime.textContent = `${parseInt(entry.domInteractive)}ms`
}
