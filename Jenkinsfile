pipeline{
    agent any
    stages{
        stage("Environnement Set Up"){
            steps{
                echo "========Installing Dependencies========"
                bat "npm i"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
        stage("Specification Testing"){
            steps{
                echo "========executing Specification Testing========"
                script {
                    def lastID = currentBuild.getProject().getLastSuccessfulBuild().getNumber();
                }
                echo "${lastID}"
                // bat "npx swagger-diff ./API/swagger.yaml ./API/swagger.1.yaml"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                    archiveArtifacts artifacts: 'API/swagger.yaml', fingerprint: true
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
        stage("Application Building"){
            steps{
                echo "========executing A========"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
        stage("E2E"){
            steps{
                echo "========executing A========"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
        stage("Report"){
            steps{
                echo "========executing A========"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }         
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}