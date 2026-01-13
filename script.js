/* ==========================================
   DAMILARE PORTFOLIO - STYLES
   ========================================== */

/* CSS Variables */
:root {
    --bg-primary: #0A0E27;
    --bg-secondary: #060914;
    --text-primary: #F5F5F7;
    --text-secondary: #A0A0A8;
    --accent: #00D9FF;
    --accent-hover: #00B8DD;
    --border-subtle: rgba(0, 217, 255, 0.1);
    --border-normal: rgba(0, 217, 255, 0.2);
    --border-strong: rgba(0, 217, 255, 0.6);
}

/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
}

/* Grid Background */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(var(--accent) 1px, transparent 1px),
        linear-gradient(90deg, var(--accent) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.2;
    pointer-events: none;
    animation: gridPulse 2s ease-in-out infinite;
    z-index: 0;
}

@keyframes gridPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.5; }
}

/* Container Utilities */
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 24px;
}

.container-narrow {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
}

/* Typography */
.section-title {
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 16px;
    text-align: center;
}

.section-subtitle {
    font-size: 20px;
    color: var(--text-secondary);
    text-align: center;
    max-width: 800px;
    margin: 0 auto 64px;
}

.accent-text {
    color: var(--accent);
}

/* Header */
#header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    transition: all 0.3s ease;
}

#header.scrolled {
    background: rgba(10, 14, 39, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-subtle);
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.nav-links {
    display: flex;
    gap: 32px;
    align-items: center;
}

.nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.2s ease;
}

.nav-link:hover {
    color: var(--accent);
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    padding: 8px;
}

.mobile-menu {
    display: none;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background: var(--bg-primary);
    border-top: 1px solid var(--border-subtle);
    padding: 24px;
    flex-direction: column;
    gap: 16px;
    z-index: 99;
}

.mobile-menu.active {
    display: flex;
}

.mobile-link {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 16px;
    transition: color 0.2s ease;
}

.mobile-link:hover {
    color: var(--accent);
}

/* Buttons */
.btn-primary, .btn-primary-small {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--accent);
    color: var(--bg-primary);
    padding: 16px 32px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn-primary-small {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
}

.btn-primary:hover, .btn-primary-small:hover {
    background: var(--accent-hover);
    box-shadow: 0 20px 40px rgba(0, 217, 255, 0.3);
}

.btn-primary i, .btn-primary-small i {
    transition: transform 0.3s ease;
}

.btn-primary:hover i, .btn-primary-small:hover i {
    transform: translateX(4px);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 24px 80px;
    position: relative;
    z-index: 1;
}

.hero-content {
    text-align: center;
    max-width: 1200px;
}

.hero-title {
    font-size: 72px;
    line-height: 1.1;
    margin-bottom: 24px;
}

.hero-subtitle {
    font-size: 24px;
    color: var(--text-secondary);
    margin-bottom: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* Intro Section */
.intro-section {
    padding: 120px 24px;
    position: relative;
    z-index: 1;
}

.intro-content {
    font-size: 18px;
    color: var(--text-secondary);
}

.intro-content p {
    margin-bottom: 24px;
}

.feature-box {
    background: rgba(10, 14, 39, 0.5);
    border: 1px solid var(--border-normal);
    border-radius: 12px;
    padding: 24px;
    margin: 32px 0;
    transition: border-color 0.3s ease;
}

.feature-box:hover {
    border-color: var(--border-strong);
}

.feature-box h3 {
    font-size: 20px;
    margin-bottom: 16px;
}

.feature-list {
    list-style: none;
}

.feature-list li {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    align-items: flex-start;
}

.feature-list i {
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 4px;
}

.closing-statement {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
    text-align: center;
    margin-top: 32px;
}

/* Systems Section */
.systems-section {
    padding: 120px 24px;
    background: var(--bg-secondary);
    position: relative;
    z-index: 1;
}

.section-header {
    margin-bottom: 64px;
}

.case-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 32px;
}

.case-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-normal);
    border-radius: 16px;
    padding: 32px;
    transition: all 0.3s ease;
}

.case-card:hover {
    border-color: var(--border-strong);
    box-shadow: 0 20px 40px rgba(0, 217, 255, 0.1);
}

.case-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.case-icon {
    color: var(--accent);
    width: 28px;
    height: 28px;
}

.case-header h3 {
    font-size: 24px;
}

.case-content {
    margin-bottom: 24px;
}

.case-block {
    margin-bottom: 16px;
}

.case-block h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
}

.case-block p {
    color: var(--text-secondary);
    font-size: 16px;
    line-height: 1.6;
}

.case-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;
}

.case-link:hover {
    color: var(--accent-hover);
}

.case-link i {
    transition: transform 0.2s ease;
}

.case-link:hover i {
    transform: translateX(4px);
}

.coming-soon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-color: var(--border-subtle);
}

.coming-soon-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(0, 217, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
}

.coming-soon-icon i {
    color: var(--accent);
    width: 32px;
    height: 32px;
}

.coming-soon h3 {
    margin-bottom: 8px;
}

.coming-soon p {
    color: var(--text-secondary);
}

/* Process Section */
.process-section {
    padding: 120px 24px;
    position: relative;
    z-index: 1;
}

.process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    margin-bottom: 64px;
}

.process-card {
    text-align: center;
}

.process-number {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(0, 217, 255, 0.1);
    border: 1px solid rgba(0, 217, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 700;
    color: var(--accent);
    margin: 0 auto 24px;
}

.process-card h3 {
    font-size: 24px;
    margin-bottom: 16px;
}

.process-card p {
    color: var(--text-secondary);
    margin-bottom: 16px;
}

.deliverables {
    font-size: 14px;
    color: var(--accent);
    font-weight: 600;
}

.process-quote {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.process-quote p {
    font-size: 20px;
    color: var(--text-secondary);
    font-style: italic;
}

.process-quote strong {
    font-style: normal;
}

/* Build Log Section */
.buildlog-section {
    padding: 120px 24px;
    background: var(--bg-secondary);
    position: relative;
    z-index: 1;
}

.log-entries {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.log-entry {
    background: var(--bg-primary);
    border: 1px solid var(--border-normal);
    border-radius: 12px;
    padding: 24px;
    transition: border-color 0.3s ease;
}

.log-entry:hover {
    border-color: var(--border-strong);
}

.log-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    flex-wrap: wrap;
}

.log-date {
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: var(--accent);
}

.log-separator {
    color: var(--text-secondary);
}

.log-header h3 {
    font-size: 20px;
    font-weight: 600;
}

.log-entry p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.screenshot-placeholder {
    margin-top: 16px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-subtle);
    border-radius: 8px;
    padding: 64px 32px;
    text-align: center;
    color: var(--text-secondary);
}

/* More Work Section */
.more-work-section {
    padding: 120px 24px;
    position: relative;
    z-index: 1;
}

.portfolio-link {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    background: var(--bg-primary);
    border: 2px solid rgba(0, 217, 255, 0.4);
    border-radius: 12px;
    padding: 20px 32px;
    text-decoration: none;
    transition: all 0.3s ease;
    margin-bottom: 32px;
}

.portfolio-link:hover {
    border-color: var(--accent);
    background: rgba(0, 217, 255, 0.05);
}

.portfolio-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(0, 217, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;
}

.portfolio-link:hover .portfolio-icon {
    background: rgba(0, 217, 255, 0.2);
}

.portfolio-icon i {
    color: var(--accent);
    width: 24px;
    height: 24px;
}

.portfolio-text {
    flex: 1;
    text-align: left;
}

.portfolio-title {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.portfolio-subtitle {
    font-size: 14px;
    color: var(--text-secondary);
}

.portfolio-arrow {
    color: var(--accent);
    transition: transform 0.3s ease;
}

.portfolio-link:hover .portfolio-arrow {
    transform: translateX(4px);
}

.portfolio-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;
}

.tag {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--text-secondary);
}

.tag-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
}

/* Contact Section */
.contact-section {
    padding: 120px 24px;
    position: relative;
    z-index: 1;
}

.info-box {
    background: var(--bg-primary);
    border: 1px solid var(--border-normal);
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 32px;
}

.info-box h3 {
    font-size: 20px;
    margin-bottom: 16px;
}

.work-list {
    list-style: none;
}

.work-list li {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    align-items: flex-start;
}

.arrow {
    color: var(--accent);
    flex-shrink: 0;
}

.work-list strong {
    color: var(--text-primary);
}

.form-box {
    background: var(--bg-primary);
    border: 1px solid var(--border-normal);
    border-radius: 16px;
    padding: 32px;
}

.form-box h3 {
    font-size: 20px;
    margin-bottom: 16px;
    text-align: center;
}

.form-box > p {
    text-align: center;
    color: var(--text-secondary);
    margin-bottom: 24px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.contact-form input,
.contact-form textarea {
    background: var(--bg-secondary);
    border: 1px solid var(--border-normal);
    border-radius: 12px;
    padding: 12px 16px;
    color: var(--text-primary);
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    transition: border-color 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--accent);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
    color: var(--text-secondary);
}

.contact-form textarea {
    resize: vertical;
    min-height: 80px;
}

.btn-submit {
    background: var(--accent);
    color: var(--bg-primary);
    padding: 16px 32px;
    border-radius: 12px;
    border: none;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-submit:hover {
    background: var(--accent-hover);
    box-shadow: 0 20px 40px rgba(0, 217, 255, 0.3);
}

/* Footer */
.footer {
    padding: 48px 24px;
    border-top: 1px solid var(--border-subtle);
    position: relative;
    z-index: 1;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
}

.footer-text {
    font-size: 14px;
    color: var(--text-secondary);
}

.social-links {
    display: flex;
    gap: 24px;
}

.social-links a {
    color: var(--text-secondary);
    transition: color 0.2s ease;
}

.social-links a:hover {
    color: var(--accent);
}

.social-links i {
    width: 24px;
    height: 24px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-title {
        font-size: 48px;
    }

    .hero-subtitle {
        font-size: 18px;
    }

    .section-title {
        font-size: 32px;
    }

    .section-subtitle {
        font-size: 18px;
    }

    .nav-links {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    .case-grid {
        grid-template-columns: 1fr;
    }

    .process-grid {
        grid-template-columns: 1fr;
    }

    .footer-content {
        flex-direction: column;
        gap: 24px;
        text-align: center;
    }

    .portfolio-link {
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
    }

    .portfolio-text {
        text-align: center;
        width: 100%;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 36px;
    }

    .btn-primary {
        padding: 12px 24px;
        font-size: 16px;
    }

    .section-title {
        font-size: 28px;
    }
}// script.js placeholder
