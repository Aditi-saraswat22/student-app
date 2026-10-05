pipeline {
    agent any
    environment {
        IMAGE     = 'student-app'
        CONTAINER = 'student-app-container'
    }
    triggers { githubPush() }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Install') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm test'
                    } else {
                        bat 'npm test'
                    }
                }
            }
            post { always { junit 'reports/junit.xml' } }
        }
        stage('Build Image') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'docker build -t ${IMAGE}:${BUILD_NUMBER} -t ${IMAGE}:latest .'
                    } else {
                        bat 'docker build -t %IMAGE%:%BUILD_NUMBER% -t %IMAGE%:latest .'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                            docker stop ${CONTAINER} || true
                            docker rm ${CONTAINER} || true
                            docker run -d --name ${CONTAINER} -p 3000:3000 ${IMAGE}:latest
                        '''
                    } else {
                        bat '''
                            docker stop %CONTAINER% 2>nul || ver>nul
                            docker rm %CONTAINER% 2>nul || ver>nul
                            docker run -d --name %CONTAINER% -p 3000:3000 %IMAGE%:latest
                        '''
                    }
                }
            }
        }
        stage('Verify') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'sleep 5 && curl -f http://localhost:3000'
                    } else {
                        bat 'ping -n 5 127.0.0.1 >nul && curl.exe -f http://localhost:3000'
                    }
                }
            }
        }
    }
    post {
        success { echo 'Deployment successful: build #' + env.BUILD_NUMBER }
        failure { echo 'Pipeline FAILED - check console output' }
        always  { archiveArtifacts artifacts: 'package.json', fingerprint: true }
    }
}
