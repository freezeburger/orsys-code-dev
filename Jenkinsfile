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
                  
                copyArtifacts(projectName: "${JOB_NAME}", selector: specific("API/swagger.yaml"))
                echo "========executing Specification Testing========"
                echo "${LAST_ID}"

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