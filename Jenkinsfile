calendar{
  def app

  stage('Clone Repo'){
    checkout scm
  }
  
  stage('Build Image') {
    app = docker.build("axelyates/unvcal")
  }
}
