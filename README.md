# ScholarStream: Academic Document Management System

ScholarStream is a comprehensive web-based platform designed for educational institutions, research organizations, and journals to streamline the lifecycle of scholarly manuscripts. From initial upload to final public discovery, the platform ensures quality control, academic integrity, and organized repository management.

## 🚀 Core Workflow
The platform follows a rigorous four-step process to transition documents from local machines to institutional catalogs:

1.  **Upload:** Securely bring PDFs into specific collections from local machines or institutional workflows.
2.  **Assess:** Automated plagiarism detection and format compliance checks to ensure document quality before formal review.
3.  **Review:** A collaborative workspace for assigning reviewers, capturing editorial decisions, and iterating on feedback.
4.  **Publish:** Final approval and automated publication to the organization's public-facing catalog and discovery services.

## ✨ Features
- **Centralized Dashboard:** A clean user interface to manage personal publications, saved documents, and organization-wide settings.
- **Advanced Search & Discovery:** Robust filtering and search capabilities to explore published academic works.
- **Role-Based Access Control:** Distinct workflows for Individual contributors and Institutional managers.
- **Status Tracking:** Real-time visibility into the status of manuscripts (e.g., "Published", "In Review").
- **Collection Management:** Organize works into departments, seminars, or specific journal issues.

## 🖥️ User Interface
- **Public Landing Page:** An intuitive overview of the four-step submission process.
- **Authenticated Dashboard:** Personal sidebar navigation for 'Explore', 'Saved', 'My Publications', and 'Organizations'.
- **Mobile Responsive:** Optimized for both desktop review and mobile browsing.

## 🛠️ Technology Stack
- **Frontend:** React with Vite
- **Backend:** Flask (Python)
- **Database:** MongoDB

## 🧪 Testing Focus Areas
- **Document Handling:** Validation of PDF uploads, size limits, and format assessment logic.
- **Auth Flow:** Security testing of the transition from the Public Landing page to the User Dashboard.
- **Navigation:** Verification of the sidebar routing and search filter accuracy.
