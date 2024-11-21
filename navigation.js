// Handle tab navigation
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Load appropriate content
            loadContent(button.dataset.tab);
        });
    });

    // Load default content (Case Library)
    loadContent('case-library');
});

function loadContent(tab) {
    const mainContent = document.getElementById('main-content');
    
    // Clear current content
    mainContent.innerHTML = '';
    
    // Load new content based on tab
    if (tab === 'case-library') {
        loadCaseLibraryHome();
    } else if (tab === 'job-tracker') {
        loadJobTrackerHome();
    }
} 
