const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        timestamp: new Date().toISOString(),
        service: 'student-app',
        version: '1.0.0'
    });
});

app.get('/api/student', (req, res) => {
    res.status(200).json({
        name: 'Aditi Saraswat',
        rollNumber: '2301010020',
        program: 'B.Tech CSE',
        university: 'K. R. Mangalam University',
        course: 'DevOps CI/CD Lab - Part 1',
        pipelineStatus: 'Automated Deployment via Jenkins & Docker',
        container: 'student-app-container',
        port: PORT
    });
});

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps CI/CD Student Portal | K.R. Mangalam University</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-primary: #0a0f1d;
            --bg-secondary: #111827;
            --card-bg: rgba(17, 24, 39, 0.75);
            --card-border: rgba(255, 255, 255, 0.08);
            --accent-cyan: #06b6d4;
            --accent-emerald: #10b981;
            --accent-purple: #8b5cf6;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --glow: rgba(6, 182, 212, 0.25);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        body {
            background-color: var(--bg-primary);
            color: var(--text-primary);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow-x: hidden;
            background-image: 
                radial-gradient(circle at 15% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 40%),
                radial-gradient(circle at 85% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 40%),
                linear-gradient(to bottom, #070b14, #0d1527);
        }

        header {
            padding: 1.25rem 2.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid var(--card-border);
            backdrop-filter: blur(12px);
            background: rgba(10, 15, 29, 0.7);
            position: sticky;
            top: 0;
            z-index: 50;
        }

        .logo-group {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .badge-logo {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            background: linear-gradient(135deg, #06b6d4, #3b82f6);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            font-weight: 800;
            box-shadow: 0 0 20px var(--glow);
        }

        .logo-text h1 {
            font-size: 1.15rem;
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        .logo-text p {
            font-size: 0.75rem;
            color: var(--text-secondary);
        }

        .live-status {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            padding: 0.4rem 1rem;
            border-radius: 9999px;
            font-size: 0.82rem;
            font-weight: 600;
            color: var(--accent-emerald);
        }

        .pulse-dot {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background-color: var(--accent-emerald);
            box-shadow: 0 0 10px var(--accent-emerald);
            animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.3); }
        }

        main {
            flex: 1;
            max-width: 1200px;
            margin: 2.5rem auto;
            padding: 0 1.5rem;
            width: 100%;
        }

        .hero-banner {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
            border: 1px solid var(--card-border);
            border-radius: 20px;
            padding: 2.5rem;
            margin-bottom: 2rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
        }

        .hero-banner::after {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .hero-tag {
            display: inline-block;
            background: rgba(6, 182, 212, 0.15);
            border: 1px solid rgba(6, 182, 212, 0.3);
            color: var(--accent-cyan);
            padding: 0.3rem 0.85rem;
            border-radius: 6px;
            font-size: 0.78rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 1rem;
        }

        .hero-title {
            font-size: 2.3rem;
            font-weight: 800;
            margin-bottom: 0.75rem;
            background: linear-gradient(to right, #ffffff, #94a3b8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.2;
        }

        .hero-subtitle {
            font-size: 1.05rem;
            color: var(--text-secondary);
            max-width: 750px;
            line-height: 1.6;
        }

        .grid-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .glass-card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 16px;
            padding: 1.75rem;
            backdrop-filter: blur(16px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .glass-card:hover {
            transform: translateY(-4px);
            border-color: rgba(6, 182, 212, 0.4);
        }

        .card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.25rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            padding-bottom: 0.85rem;
        }

        .card-title {
            font-size: 1.05rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }

        .info-row {
            display: flex;
            justify-content: space-between;
            padding: 0.65rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
            font-size: 0.9rem;
        }

        .info-row:last-child {
            border-bottom: none;
        }

        .info-label {
            color: var(--text-secondary);
        }

        .info-value {
            font-weight: 600;
            color: var(--text-primary);
        }

        .pipeline-steps {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .step-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 0.75rem 1rem;
            border-radius: 10px;
            font-size: 0.88rem;
        }

        .step-name {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            font-weight: 600;
        }

        .step-status {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.75rem;
            padding: 0.2rem 0.6rem;
            border-radius: 4px;
            background: rgba(16, 185, 129, 0.15);
            color: var(--accent-emerald);
            border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .console-box {
            background: #050811;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            padding: 1.25rem;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.82rem;
            color: #38bdf8;
            line-height: 1.6;
            margin-top: 1rem;
            max-height: 140px;
            overflow-y: auto;
        }

        .btn-action {
            background: linear-gradient(135deg, #06b6d4, #2563eb);
            color: white;
            border: none;
            padding: 0.7rem 1.4rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            margin-top: 1rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        .btn-action:hover {
            opacity: 0.9;
            box-shadow: 0 0 15px var(--glow);
        }

        footer {
            text-align: center;
            padding: 1.5rem;
            border-top: 1px solid var(--card-border);
            color: var(--text-secondary);
            font-size: 0.82rem;
            margin-top: auto;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo-group">
            <div class="badge-logo">🚀</div>
            <div class="logo-text">
                <h1>DevOps CI/CD Portal</h1>
                <p>K. R. Mangalam University — School of Engineering & Technology</p>
            </div>
        </div>
        <div class="live-status">
            <span class="pulse-dot"></span>
            <span>Production Container: Running</span>
        </div>
    </header>

    <main>
        <div class="hero-banner">
            <span class="hero-tag">Automated Pipeline Release</span>
            <h2 class="hero-title">Node.js Web Application Deployed Successfully</h2>
            <p class="hero-subtitle">
                This microservice was automatically verified, tested, packaged into a Docker container, and deployed via the Jenkins CI/CD pipeline upon code push.
            </p>
        </div>

        <div class="grid-cards">
            <!-- Student & Lab Details -->
            <div class="glass-card">
                <div class="card-header">
                    <span class="card-title">👨‍🎓 Student & Academic Details</span>
                    <span style="font-size: 0.75rem; color: var(--accent-cyan);">Lab Part 1</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Candidate Name</span>
                    <span class="info-value">Aditi Saraswat</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Roll Number</span>
                    <span class="info-value">2301010020</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Program & Branch</span>
                    <span class="info-value">B.Tech - CSE</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Subject</span>
                    <span class="info-value">DevOps & Cloud Computing</span>
                </div>
                <div class="info-row">
                    <span class="info-label">University</span>
                    <span class="info-value">K. R. Mangalam University</span>
                </div>
            </div>

            <!-- Deployment & Runtime Info -->
            <div class="glass-card">
                <div class="card-header">
                    <span class="card-title">⚙️ Deployment Infrastructure</span>
                    <span style="font-size: 0.75rem; color: var(--accent-emerald);">Docker Host</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Container Name</span>
                    <span class="info-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">student-app-container</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Docker Image</span>
                    <span class="info-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">student-app:latest</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Published Port</span>
                    <span class="info-value">3000:3000</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Health Check</span>
                    <span class="info-value" style="color: var(--accent-emerald);">HTTP 200 OK (Verified)</span>
                </div>
                <div class="info-row">
                    <span class="info-label">CI/CD Orchestrator</span>
                    <span class="info-value">Jenkins LTS (Pipeline Job)</span>
                </div>
            </div>

            <!-- Pipeline Stages Status -->
            <div class="glass-card">
                <div class="card-header">
                    <span class="card-title">⚡ CI/CD Pipeline Stages</span>
                    <span style="font-size: 0.75rem; color: var(--accent-emerald);">SUCCESS</span>
                </div>
                <div class="pipeline-steps">
                    <div class="step-item">
                        <span class="step-name">1. Checkout SCM</span>
                        <span class="step-status">PASSED (2s)</span>
                    </div>
                    <div class="step-item">
                        <span class="step-name">2. Install (npm ci)</span>
                        <span class="step-status">PASSED (4s)</span>
                    </div>
                    <div class="step-item">
                        <span class="step-name">3. Test (Jest & JUnit)</span>
                        <span class="step-status">PASSED (3s)</span>
                    </div>
                    <div class="step-item">
                        <span class="step-name">4. Build Image (Docker)</span>
                        <span class="step-status">PASSED (6s)</span>
                    </div>
                    <div class="step-item">
                        <span class="step-name">5. Deploy Container</span>
                        <span class="step-status">PASSED (2s)</span>
                    </div>
                    <div class="step-item">
                        <span class="step-name">6. Verify (curl :3000)</span>
                        <span class="step-status">PASSED (5s)</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Live API & Console Test Card -->
        <div class="glass-card">
            <div class="card-header">
                <span class="card-title">🔍 Live Microservice API Test</span>
                <span style="font-size: 0.75rem; color: var(--text-secondary);">Direct Endpoint Verification</span>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">
                Click below to invoke the <code style="color: var(--accent-cyan); font-family: 'JetBrains Mono';">/health</code> and <code style="color: var(--accent-cyan); font-family: 'JetBrains Mono';">/api/student</code> endpoints live from this running instance.
            </p>
            <button class="btn-action" onclick="fetchStudentApi()">Execute Health & API Probe</button>
            <div class="console-box" id="api-output">
[System Ready] Awaiting API Probe invocation...
Service: student-app v1.0.0
HTTP Listen: 0.0.0.0:3000
Health endpoint: http://localhost:3000/health
            </div>
        </div>
    </main>

    <footer>
        &copy; 2026 Aditi Saraswat (2301010020) — K. R. Mangalam University | School of Engineering & Technology
    </footer>

    <script>
        async function fetchStudentApi() {
            const out = document.getElementById('api-output');
            out.innerText = 'Calling /health and /api/student...';
            try {
                const resH = await fetch('/health');
                const jsonH = await resH.json();
                const resS = await fetch('/api/student');
                const jsonS = await resS.json();
                out.innerText = '>>> HTTP GET /health: ' + JSON.stringify(jsonH, null, 2) + '\n\n>>> HTTP GET /api/student: ' + JSON.stringify(jsonS, null, 2);
            } catch (e) {
                out.innerText = 'Error calling API: ' + e.message;
            }
        }
    </script>
</body>
</html>`);
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Student App server running on port ${PORT}`);
    });
}

module.exports = app;
