document.querySelectorAll('[role="tablist"]').forEach(tablist => {
    const tabs = tablist.querySelectorAll('[role="tab"]');
    const panels = tablist.parentNode.querySelectorAll('[role="tabpanel"]');
 
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        panels.forEach(p => p.hidden = true);
 
        tab.setAttribute('aria-selected', 'true');
        const panel = document.getElementById(tab.getAttribute('aria-controls'));
        if (panel) panel.hidden = false;
      });
    });
  });