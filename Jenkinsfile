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

                    script{
                        def LAST_ID
                        def BUILD = currentBuild.previousBuild;
                        while( BUILD != null ){
                            if( BUILD.result == 'SUCCESS'){
                                LAST_ID = BUILD.id   
                                break; 
                            }
                            BUILD = BUILD.previousBuild ;
                        }
                    if(LAST_ID){
                        bat "npx swagger-diff ./API/swagger.yaml C:/opt/Jenkins/jobs/orsys-code-dev-master/branches/master/builds/${LAST_ID}/archive/API/swagger.yaml"
                    }
                    }

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
                    echo "========Building========"
                    bat "cd front-end && npm i && npx ng build"
                    echo "========Cleaning========"
                    bat "RMDIR /S /Q C:/Users/orsys/Desktop/server-html"
                    echo "========Deploying========"
                    bat "xcopy front-end/dist C:/Users/orsys/Desktop/server-html /E"
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
                    echo "========executing Stories========"
                    bat "cd stories && npx cypress run"
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