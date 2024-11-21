function loadJobTrackerHome() {
    try {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) throw new Error('Main content container not found');
        
        mainContent.innerHTML = `
            <div class="job-tracker-home">
                <header class="section-header">
                    <h1>Application Tracker</h1>
                    <p>Track and manage your job applications</p>
                </header>

                <div class="tracker-stats">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-paper-plane"></i>
                        </div>
                        <div class="stat-info">
                            <h3>Total Applications</h3>
                            <p class="stat-number">24</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon active">
                            <i class="fas fa-hourglass-half"></i>
                        </div>
                        <div class="stat-info">
                            <h3>In Progress</h3>
                            <p class="stat-number">8</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon success">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="stat-info">
                            <h3>Offers</h3>
                            <p class="stat-number">2</p>
                        </div>
                    </div>
                </div>

                <div class="main-actions">
                    <button class="action-btn primary" onclick="navigateToNewApplication()">
                        <i class="fas fa-plus"></i>
                        Log New Application
                    </button>
                    <button class="action-btn secondary" onclick="navigateToApplicationList()">
                        <i class="fas fa-list"></i>
                        View All Applications
                    </button>
                </div>

                <div class="recent-applications">
                    <div class="section-header-with-action">
                        <h2>Recent Applications</h2>
                        <button class="text-btn" onclick="navigateToApplicationList()">
                            View All <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                    <div class="applications-grid">
                        ${generateRecentApplications()}
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error loading job tracker home:', error);
        showErrorMessage('Failed to load job tracker home');
    }
}

function generateRecentApplications() {
    try {
        const recentApplications = [
            {
                company: "McKinsey & Company",
                role: "Management Consultant",
                status: "Interviewing",
                date: "2024-02-15",
                logo: "https://placeholder.com/150"
            },
            {
                company: "Boston Consulting Group",
                role: "Associate Consultant",
                status: "Applied",
                date: "2024-02-14",
                logo: "https://placeholder.com/150"
            },
            {
                company: "Bain & Company",
                role: "Associate Consultant",
                status: "Offer",
                date: "2024-02-10",
                logo: "https://placeholder.com/150"
            }
        ];

        return recentApplications.map(app => `
            <div class="application-card" onclick="viewApplicationDetails('${app.company}')">
                <div class="company-info">
                    <div class="company-logo">
                        <i class="fas fa-building"></i>
                    </div>
                    <div class="company-details">
                        <h3>${app.company}</h3>
                        <p class="role-title">${app.role}</p>
                    </div>
                </div>
                <div class="application-meta">
                    <span class="status-tag ${app.status.toLowerCase()}">${app.status}</span>
                    <p class="application-date">Applied: ${app.date}</p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error generating recent applications:', error);
        return '<p class="error-message">Failed to load recent applications</p>';
    }
}

function navigateToNewApplication() {
    try {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) throw new Error('Main content container not found');
        
        mainContent.innerHTML = `
            <div class="new-application-container">
                <header class="page-header">
                    <button class="back-btn" onclick="loadJobTrackerHome()">
                        <i class="fas fa-arrow-left"></i> Back
                    </button>
                    <h1>Log New Application</h1>
                </header>

                <form id="applicationForm" class="application-form" onsubmit="handleApplicationSubmit(event)">
                    <div class="form-section">
                        <h2>Company Information</h2>
                        <div class="form-group">
                            <label for="companyName">Company Name*</label>
                            <input type="text" id="companyName" required 
                                   placeholder="e.g., McKinsey & Company">
                        </div>

                        <div class="form-group">
                            <label for="roleTitle">Role*</label>
                            <input type="text" id="roleTitle" required 
                                   placeholder="e.g., Management Consultant">
                        </div>

                        <div class="form-group">
                            <label for="location">Location</label>
                            <input type="text" id="location" 
                                   placeholder="e.g., New York, NY">
                        </div>
                    </div>

                    <div class="form-section">
                        <h2>Application Details</h2>
                        <div class="form-row">
                            <div class="form-group half">
                                <label for="applicationDate">Date Applied*</label>
                                <input type="date" id="applicationDate" required>
                            </div>
                            <div class="form-group half">
                                <label for="applicationStatus">Status*</label>
                                <select id="applicationStatus" required>
                                    <option value="">Select Status</option>
                                    <option value="applied">Applied</option>
                                    <option value="interviewing">Interviewing</option>
                                    <option value="offer">Offer Received</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="jobDescription">Job Description URL</label>
                            <input type="url" id="jobDescription" 
                                   placeholder="https://...">
                        </div>
                    </div>

                    <div class="form-section">
                        <h2>Additional Information</h2>
                        <div class="form-group">
                            <label for="salary">Salary Range</label>
                            <input type="text" id="salary" 
                                   placeholder="e.g., $80,000 - $100,000">
                        </div>

                        <div class="form-group">
                            <label for="notes">Notes</label>
                            <textarea id="notes" rows="4" 
                                    placeholder="Add any additional notes about the application..."></textarea>
                        </div>

                        <div class="form-group">
                            <label for="nextSteps">Next Steps</label>
                            <textarea id="nextSteps" rows="2"
                                    placeholder="e.g., Follow up by email next week..."></textarea>
                        </div>
                    </div>

                    <div class="form-section">
                        <h2>Documents</h2>
                        <div class="form-group">
                            <label>Resume Version</label>
                            <div class="file-upload">
                                <input type="file" id="resumeFile" accept=".pdf,.doc,.docx">
                                <label for="resumeFile" class="file-label">
                                    <i class="fas fa-upload"></i>
                                    <span>Upload Resume</span>
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Cover Letter</label>
                            <div class="file-upload">
                                <input type="file" id="coverLetterFile" accept=".pdf,.doc,.docx">
                                <label for="coverLetterFile" class="file-label">
                                    <i class="fas fa-upload"></i>
                                    <span>Upload Cover Letter</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="button" class="secondary-btn" onclick="loadJobTrackerHome()">
                            Cancel
                        </button>
                        <button type="submit" class="primary-btn">
                            Save Application
                        </button>
                    </div>
                </form>
            </div>
        `;

        // Set default date to today
        document.getElementById('applicationDate').valueAsDate = new Date();
        setupFileUploadListeners();
    } catch (error) {
        console.error('Error navigating to new application:', error);
        showErrorMessage('Failed to load application form');
    }
}

function setupFileUploadListeners() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const label = e.target.nextElementSibling;
            if (e.target.files.length > 0) {
                label.innerHTML = `
                    <i class="fas fa-file-alt"></i>
                    <span>${e.target.files[0].name}</span>
                `;
            }
        });
    });
}

function handleApplicationSubmit(event) {
    event.preventDefault();
    try {
        // Simulate successful submission
        const successMessage = `
            <div class="submission-success">
                <i class="fas fa-check-circle"></i>
                <h2>Application Logged Successfully!</h2>
                <p>Your job application has been saved.</p>
                <button class="primary-btn" onclick="loadJobTrackerHome()">
                    Return to Home
                </button>
            </div>
        `;
        
        document.querySelector('.new-application-container').innerHTML = successMessage;
    } catch (error) {
        console.error('Error submitting application:', error);
        showErrorMessage('Failed to save application');
    }
}

function navigateToApplicationList() {
    try {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) throw new Error('Main content container not found');
        
        mainContent.innerHTML = `
            <div class="applications-list-container">
                <header class="page-header">
                    <div class="header-left">
                        <button class="back-btn" onclick="loadJobTrackerHome()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                        <h1>My Applications</h1>
                    </div>
                    <button class="primary-btn" onclick="navigateToNewApplication()">
                        <i class="fas fa-plus"></i> New Application
                    </button>
                </header>

                <div class="applications-filters">
                    <div class="search-bar">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search applications..." 
                               onkeyup="filterApplications()">
                    </div>
                    
                    <div class="filter-group">
                        <select id="statusFilter" onchange="filterApplications()">
                            <option value="">All Statuses</option>
                            <option value="applied">Applied</option>
                            <option value="interviewing">Interviewing</option>
                            <option value="offer">Offer</option>
                            <option value="rejected">Rejected</option>
                        </select>
                        
                        <select id="dateFilter" onchange="filterApplications()">
                            <option value="">All Dates</option>
                            <option value="week">Past Week</option>
                            <option value="month">Past Month</option>
                            <option value="3months">Past 3 Months</option>
                        </select>
                    </div>
                </div>

                <div class="applications-table">
                    <div class="table-header">
                        <div class="th company-col">Company</div>
                        <div class="th role-col">Role</div>
                        <div class="th date-col">Date Applied</div>
                        <div class="th status-col">Status</div>
                        <div class="th actions-col">Actions</div>
                    </div>
                    <div class="table-body">
                        ${generateApplicationRows()}
                    </div>
                </div>

                <div class="table-footer">
                    <div class="showing-entries">
                        Showing 1-10 of 24 entries
                    </div>
                    <div class="pagination">
                        <button class="page-btn" disabled>Previous</button>
                        <button class="page-btn active">1</button>
                        <button class="page-btn">2</button>
                        <button class="page-btn">3</button>
                        <button class="page-btn">Next</button>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error loading applications list:', error);
        showErrorMessage('Failed to load applications');
    }
}

function generateApplicationRows() {
    try {
        const applications = [
            {
                company: "McKinsey & Company",
                role: "Management Consultant",
                date: "2024-02-15",
                status: "Interviewing",
                id: "1"
            },
            {
                company: "Boston Consulting Group",
                role: "Associate Consultant",
                date: "2024-02-14",
                status: "Applied",
                id: "2"
            },
            {
                company: "Bain & Company",
                role: "Associate Consultant",
                date: "2024-02-10",
                status: "Offer",
                id: "3"
            },
            {
                company: "Deloitte",
                role: "Strategy Consultant",
                date: "2024-02-08",
                status: "Rejected",
                id: "4"
            }
        ];

        return applications.map(app => `
            <div class="table-row" onclick="viewApplicationDetails('${app.id}')">
                <div class="td company-col">
                    <div class="company-info">
                        <div class="company-logo">
                            <i class="fas fa-building"></i>
                        </div>
                        <span>${app.company}</span>
                    </div>
                </div>
                <div class="td role-col">${app.role}</div>
                <div class="td date-col">${app.date}</div>
                <div class="td status-col">
                    <span class="status-tag ${app.status.toLowerCase()}">${app.status}</span>
                </div>
                <div class="td actions-col">
                    <button class="icon-btn" onclick="editApplication('${app.id}'); event.stopPropagation();">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="icon-btn delete" onclick="deleteApplication('${app.id}'); event.stopPropagation();">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error generating application rows:', error);
        return '<p class="error-message">Failed to load applications</p>';
    }
}

function filterApplications() {
    console.log('Filtering applications...');
    // Will be implemented later
}

function editApplication(id) {
    console.log('Editing application:', id);
    // Will be implemented later
}

function deleteApplication(id) {
    if (confirm('Are you sure you want to delete this application?')) {
        console.log('Deleting application:', id);
        // Will be implemented later
    }
}

function viewApplicationDetails(applicationId) {
    try {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) throw new Error('Main content container not found');

        // Mock data for application details
        const application = {
            id: applicationId,
            company: "McKinsey & Company",
            role: "Management Consultant",
            location: "New York, NY",
            dateApplied: "2024-02-15",
            status: "Interviewing",
            jobUrl: "https://www.mckinsey.com/careers",
            salary: "$95,000 - $120,000",
            notes: "Initial phone screen scheduled for next week. Need to prepare behavioral questions and case frameworks.",
            nextSteps: "Follow up with HR about interview schedule",
            timeline: [
                {
                    date: "2024-02-15",
                    status: "Applied",
                    notes: "Submitted application through company website"
                },
                {
                    date: "2024-02-18",
                    status: "Contact",
                    notes: "Received confirmation email"
                },
                {
                    date: "2024-02-20",
                    status: "Interviewing",
                    notes: "Scheduled phone screen for 02/25"
                }
            ]
        };

        mainContent.innerHTML = `
            <div class="application-details-container">
                <header class="page-header">
                    <button class="back-btn" onclick="navigateToApplicationList()">
                        <i class="fas fa-arrow-left"></i> Back to Applications
                    </button>
                    <div class="header-actions">
                        <button class="secondary-btn" onclick="editApplication('${applicationId}')">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="danger-btn" onclick="deleteApplication('${applicationId}')">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </header>

                <div class="details-content">
                    <div class="main-details">
                        <div class="company-header">
                            <div class="company-logo">
                                <i class="fas fa-building"></i>
                            </div>
                            <div class="company-info">
                                <h1>${application.company}</h1>
                                <p class="role-title">${application.role}</p>
                                <p class="location"><i class="fas fa-map-marker-alt"></i> ${application.location}</p>
                            </div>
                            <span class="status-tag ${application.status.toLowerCase()}">
                                ${application.status}
                            </span>
                        </div>

                        <div class="details-grid">
                            <div class="detail-card">
                                <h3>Application Date</h3>
                                <p>${application.dateApplied}</p>
                            </div>
                            <div class="detail-card">
                                <h3>Salary Range</h3>
                                <p>${application.salary}</p>
                            </div>
                            <div class="detail-card">
                                <h3>Job Posting</h3>
                                <a href="${application.jobUrl}" target="_blank" class="link">
                                    View Original Post <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>

                        <div class="details-section">
                            <h2>Notes</h2>
                            <p>${application.notes}</p>
                        </div>

                        <div class="details-section">
                            <h2>Next Steps</h2>
                            <p>${application.nextSteps}</p>
                        </div>

                        <div class="details-section">
                            <h2>Documents</h2>
                            <div class="documents-grid">
                                <div class="document-card">
                                    <i class="fas fa-file-pdf"></i>
                                    <span>Resume_v1.pdf</span>
                                    <button class="icon-btn"><i class="fas fa-download"></i></button>
                                </div>
                                <div class="document-card">
                                    <i class="fas fa-file-word"></i>
                                    <span>Cover_Letter.docx</span>
                                    <button class="icon-btn"><i class="fas fa-download"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-section">
                        <h2>Application Timeline</h2>
                        <div class="timeline">
                            ${application.timeline.map(event => `
                                <div class="timeline-item">
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                        <div class="timeline-date">${event.date}</div>
                                        <div class="timeline-status">${event.status}</div>
                                        <div class="timeline-notes">${event.notes}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error loading application details:', error);
        showErrorMessage('Failed to load application details');
    }
}

function showErrorMessage(message) {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="error-container">
                <p class="error-message">${message}</p>
                <button onclick="loadJobTrackerHome()" class="primary-btn">Return to Home</button>
            </div>
        `;
    }
} 
