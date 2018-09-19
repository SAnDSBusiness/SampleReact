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
                sh '''#!/bin/bash -l
                    echo $0
                    git config credential.username \$env:GH_USERNAME
                    git config credential.helper \"!echo password=\$env:GH_TOKEN; echo\"
                    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                    nvm install
                    npm install @datatransparency/devops
                    npx devops ci
                    git config --unset credential.username
                    git config --unset credential.helper'''
                    
            }
        }
    }
}