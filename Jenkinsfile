pipeline {
    agent { 
        label 'linux'
    }
    environment { 
        CI=true
        LOCATION='CI'
        GH_USERNAME=credentials('GH_USERNAME')
        GH_TOKEN=credentials('GH_TOKEN')
        GITHUB_TOKEN=credentials('GH_TOKEN')
        NPM_TOKEN=credentials('NPM_TOKEN')
        GIT_ASKPASS=true
    }
    stages {
        stage('Build Test and Release') {
            steps {
                echo 'Building..'
                sh 'git config credential.username \$env:GH_USERNAME'
                sh 'git config credential.helper \"!echo password=\$env:GH_TOKEN; echo\"'
                sh 'curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash'
                sh 'export NVM_DIR="$HOME/.nvm"'
                sh '''export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"'''
                sh 'nvm install'
                sh 'npm install @datatransparency/devops'
                sh 'npx devops ci'
                sh 'git config --unset credential.username'
                sh 'git config --unset credential.helper'
            }
        }
    }
}