// Main functions for case library navigation and content loading
function loadCaseLibraryHome() {
    try {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) throw new Error('Main content container not found');
        
        mainContent.innerHTML = `
            <div class="case-library-home">
                <header class="section-header">
                    <h1>Case Library & Upload Portal</h1>
                    <p>Access and contribute to our collection of consulting cases</p>
                </header>

                <div class="main-buttons">
                    <button class="action-btn upload-btn" onclick="navigateToUpload()">
                        <i class="fas fa-upload"></i>
                        Upload a Case
                    </button>
                    <button class="action-btn search-btn" onclick="navigateToSearch()">
                        <i class="fas fa-search"></i>
                        Search Cases
                    </button>
                </div>

                <div class="quick-stats">
                    <div class="stat-card">
                        <h3>Total Cases</h3>
                        <p class="stat-number">150</p>
                    </div>
                    <div class="stat-card">
                        <h3>Categories</h3>
                        <p class="stat-number">8</p>
                    </div>
                    <div class="stat-card">
                        <h3>Recent Uploads</h3>
                        <p class="stat-number">12</p>
                    </div>
                </div>

                <div class="recent-cases">
                    <h2>Recently Added Cases</h2>
                    <div class="case-preview-grid">
                        ${generateRecentCases()}
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error loading case library home:', error);
        showErrorMessage('Failed to load case library home');
    }
}

// Generate recent cases preview
function generateRecentCases() {
    try {
        const recentCases = [
            {
                title: "Market Entry Strategy - EV Charging",
                category: "Market Entry",
                difficulty: "Medium",
                date: "2024-02-15"
            },
            {
                title: "Retail Profitability Analysis",
                category: "Profitability",
                difficulty: "Hard",
                date: "2024-02-14"
            },
            {
                title: "Healthcare Tech Acquisition",
                category: "M&A",
                difficulty: "Easy",
                date: "2024-02-13"
            }
        ];

        return recentCases.map(caseItem => `
            <div class="case-preview-card">
                <div class="case-header">
                    <span class="difficulty-tag ${caseItem.difficulty.toLowerCase()}">
                        ${caseItem.difficulty}
                    </span>
                    <span class="category-tag">${caseItem.category}</span>
                </div>
                <h3>${caseItem.title}</h3>
                <p class="case-date">Added: ${caseItem.date}</p>
                <button class="view-case-btn" onclick="viewCaseDetails('${caseItem.title}')">
                    View Case
                </button>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error generating recent cases:', error);
        return '<p class="error-message">Failed to load recent cases</p>';
    }
}

// Navigation functions
function navigateToUpload() {
    try {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) throw new Error('Main content container not found');
        
        mainContent.innerHTML = `
            <div class="upload-container">
                <header class="page-header">
                    <button class="back-btn" onclick="loadCaseLibraryHome()">
                        <i class="fas fa-arrow-left"></i> Back
                    </button>
                    <h1>Upload a Case</h1>
                </header>
                <form id="uploadForm" class="upload-form">
                    <div class="form-group">
                        <label for="caseTitle">Case Title*</label>
                        <input type="text" id="caseTitle" required>
                    </div>
                    <div class="form-group">
                        <label for="caseDescription">Description*</label>
                        <textarea id="caseDescription" required></textarea>
                    </div>
                    <div class="form-row">
                        <div class="form-group half">
                            <label for="caseCategory">Category*</label>
                            <select id="caseCategory" required>
                                <option value="">Select Category</option>
                                <option value="market-entry">Market Entry</option>
                                <option value="profitability">Profitability</option>
                                <option value="ma">M&A</option>
                            </select>
                        </div>
                        <div class="form-group half">
                            <label for="caseDifficulty">Difficulty*</label>
                            <select id="caseDifficulty" required>
                                <option value="">Select Difficulty</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="caseFile">Case File*</label>
                        <input type="file" id="caseFile" required>
                    </div>
                    <div class="form-actions">
                        <button type="button" onclick="loadCaseLibraryHome()" class="secondary-btn">Cancel</button>
                        <button type="submit" class="primary-btn">Upload Case</button>
                    </div>
                </form>
            </div>
        `;

        // Add form submit handler
        document.getElementById('uploadForm').addEventListener('submit', handleUpload);
    } catch (error) {
        console.error('Error navigating to upload:', error);
        showErrorMessage('Failed to load upload page');
    }
}

// Form submission handler
function handleUpload(event) {
    event.preventDefault();
    try {
        // Simulate successful upload
        const uploadContainer = document.querySelector('.upload-container');
        uploadContainer.innerHTML = `
            <div class="upload-success">
                <i class="fas fa-check-circle"></i>
                <h2>Upload Successful!</h2>
                <p>Your case has been added to the library.</p>
                <button onclick="loadCaseLibraryHome()" class="primary-btn">Return to Home</button>
            </div>
        `;
    } catch (error) {
        console.error('Error handling upload:', error);
        showErrorMessage('Failed to upload case');
    }
}

// Error handling
function showErrorMessage(message) {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="error-container">
                <p class="error-message">${message}</p>
                <button onclick="loadCaseLibraryHome()" class="primary-btn">Return to Home</button>
            </div>
        `;
    }
}

// Initialize case library
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Case library initialized');
});

// Add this function to the existing case-library.js

function navigateToSearch() {
    try {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) throw new Error('Main content container not found');
        
        mainContent.innerHTML = `
            <div class="search-container">
                <header class="page-header">
                    <button class="back-btn" onclick="loadCaseLibraryHome()">
                        <i class="fas fa-arrow-left"></i> Back
                    </button>
                    <h1>Search Cases</h1>
                </header>

                <div class="search-filters">
                    <div class="search-bar">
                        <input type="text" id="searchInput" placeholder="Search cases...">
                        <button onclick="performSearch()" class="search-btn">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    
                    <div class="filter-row">
                        <div class="filter-group">
                            <label for="categoryFilter">Category</label>
                            <select id="categoryFilter" onchange="performSearch()">
                                <option value="">All Categories</option>
                                <option value="market-entry">Market Entry</option>
                                <option value="profitability">Profitability</option>
                                <option value="ma">M&A</option>
                                <option value="pricing">Pricing Strategy</option>
                                <option value="growth">Growth Strategy</option>
                            </select>
                        </div>
                        
                        <div class="filter-group">
                            <label for="difficultyFilter">Difficulty</label>
                            <select id="difficultyFilter" onchange="performSearch()">
                                <option value="">All Difficulties</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="search-results" id="searchResults">
                    ${generateSearchResults()}
                </div>
            </div>
        `;

        // Add search input event listener
        document.getElementById('searchInput').addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    } catch (error) {
        console.error('Error navigating to search:', error);
        showErrorMessage('Failed to load search page');
    }
}

function generateSearchResults() {
    try {
        // Mock data for search results
        const mockResults = [
            {
                title: "Market Entry Strategy - EV Charging",
                description: "Analysis of electric vehicle charging market entry opportunities in European markets.",
                category: "Market Entry",
                difficulty: "Medium",
                date: "2024-02-15"
            },
            {
                title: "Retail Profitability Analysis",
                description: "Comprehensive analysis of a retail chain's profitability and recommendations for improvement.",
                category: "Profitability",
                difficulty: "Hard",
                date: "2024-02-14"
            },
            {
                title: "Healthcare Tech Acquisition",
                description: "Evaluation of potential acquisition targets in the healthcare technology sector.",
                category: "M&A",
                difficulty: "Easy",
                date: "2024-02-13"
            }
        ];

        if (mockResults.length === 0) {
            return `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>No cases found matching your criteria</p>
                </div>
            `;
        }

        return mockResults.map(result => `
            <div class="case-card">
                <div class="case-card-header">
                    <h3>${result.title}</h3>
                    <div class="case-tags">
                        <span class="difficulty-tag ${result.difficulty.toLowerCase()}">
                            ${result.difficulty}
                        </span>
                        <span class="category-tag">
                            ${result.category}
                        </span>
                    </div>
                </div>
                <p class="case-description">${result.description}</p>
                <div class="case-card-footer">
                    <span class="case-date">Added: ${result.date}</span>
                    <button onclick="viewCaseDetails('${result.title}')" class="view-btn">
                        View Case
                    </button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error generating search results:', error);
        return '<p class="error-message">Failed to load search results</p>';
    }
}

function performSearch() {
    try {
        const searchInput = document.getElementById('searchInput').value;
        const categoryFilter = document.getElementById('categoryFilter').value;
        const difficultyFilter = document.getElementById('difficultyFilter').value;

        console.log('Performing search with:', {
            search: searchInput,
            category: categoryFilter,
            difficulty: difficultyFilter
        });

        // Refresh results
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.innerHTML = generateSearchResults();
        }
    } catch (error) {
        console.error('Error performing search:', error);
        showErrorMessage('Failed to perform search');
    }
}

function viewCaseDetails(caseTitle) {
    try {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) throw new Error('Main content container not found');

        // Mock data for case details
        const caseDetails = {
            title: caseTitle,
            category: "Market Entry",
            difficulty: "Medium",
            dateAdded: "2024-02-15",
            description: "A comprehensive analysis of the electric vehicle charging market in European countries. This case explores market dynamics, competitive landscape, and potential entry strategies.",
            keyPoints: [
                "Market size and growth projections",
                "Competitive analysis of existing players",
                "Regulatory environment across key markets",
                "Infrastructure requirements and costs"
            ],
            frameworks: [
                "Porter's Five Forces",
                "Market Sizing",
                "Cost-Benefit Analysis"
            ],
            fileUrl: "#" // Mock URL for the case file
        };

        mainContent.innerHTML = `
            <div class="case-details-container">
                <header class="page-header">
                    <button class="back-btn" onclick="navigateToSearch()">
                        <i class="fas fa-arrow-left"></i> Back to Search
                    </button>
                    <h1>${caseDetails.title}</h1>
                </header>

                <div class="case-details-content">
                    <div class="case-meta">
                        <div class="meta-tags">
                            <span class="difficulty-tag ${caseDetails.difficulty.toLowerCase()}">
                                ${caseDetails.difficulty}
                            </span>
                            <span class="category-tag">
                                ${caseDetails.category}
                            </span>
                            <span class="date-tag">
                                Added: ${caseDetails.dateAdded}
                            </span>
                        </div>
                        <button class="download-btn" onclick="downloadCase('${caseDetails.fileUrl}')">
                            <i class="fas fa-download"></i> Download Case
                        </button>
                    </div>

                    <div class="case-section">
                        <h2>Description</h2>
                        <p>${caseDetails.description}</p>
                    </div>

                    <div class="case-section">
                        <h2>Key Points</h2>
                        <ul class="key-points-list">
                            ${caseDetails.keyPoints.map(point => `
                                <li><i class="fas fa-check"></i> ${point}</li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="case-section">
                        <h2>Recommended Frameworks</h2>
                        <div class="frameworks-list">
                            ${caseDetails.frameworks.map(framework => `
                                <span class="framework-tag">${framework}</span>
                            `).join('')}
                        </div>
                    </div>

                    <div class="case-actions">
                        <button class="secondary-btn" onclick="navigateToSearch()">
                            Back to Search
                        </button>
                        <button class="primary-btn" onclick="downloadCase('${caseDetails.fileUrl}')">
                            Download Case
                        </button>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error loading case details:', error);
        showErrorMessage('Failed to load case details');
    }
}

function downloadCase(fileUrl) {
    // Simulate download functionality
    alert('Download started... (This is a mockup)');
} 
