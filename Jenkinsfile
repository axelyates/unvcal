pipeline {

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'docker build . -t unvcal'
                sh 'docker container run -d -p 80:3000 --name unvcal unvcal'
            }
        }
    }
}
