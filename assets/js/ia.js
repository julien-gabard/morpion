const ia = {

    // Coordinates of boxes 1 to 9
    gameBox: [
        [83.33333333333333, 83.33333333333333, 166.66666666666666, 166.66666666666666],
        [83.33333333333333, 250, 166.66666666666666, 166.66666666666666],
        [83.33333333333333, 416.66666666666663, 166.66666666666666, 166.66666666666666],
        [250, 83.33333333333333, 166.66666666666666, 166.66666666666666],
        [250, 250, 166.66666666666666, 166.66666666666666],
        [250, 416.66666666666663, 166.66666666666666, 166.66666666666666],
        [416.66666666666663, 83.33333333333333, 166.66666666666666, 166.66666666666666],
        [416.66666666666663, 250, 166.66666666666666, 166.66666666666666],
        [416.66666666666663, 416.66666666666663, 166.66666666666666, 166.66666666666666],
    ],

    iaCaseY: '',
    iaCaseX: '',
    firstSymbol: '',
    secondSymbol: '',
    blockedPlayer: false,
    placementVictory: false,

    init: function() {
        if (app.currentUser) {
            ia.firstSymbol = 'croix';
            ia.secondSymbol = 'rond';
        } else {
            ia.firstSymbol = 'rond';
            ia.secondSymbol = 'croix';
        }
        
        ia.checkVictory();
        ia.blockUser();
        ia.randomIa();
    },

    checkVictory: function() {
        //case 1 et 2
        if (app.strokes[0][0] === ia.firstSymbol && app.strokes[0][1] === ia.firstSymbol && app.strokes[0][2] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[2]);
            } else {
                app.createCircle(...ia.gameBox[2]);
            }
            ia.symbolPosition(0, 2);
            ia.placementVictory = true;

        // case 2 et 3
        } else if (app.strokes[0][1] === ia.firstSymbol && app.strokes[0][2] === ia.firstSymbol && app.strokes[0][0] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[0]);
            } else {
                app.createCircle(...ia.gameBox[0]);
            }
            ia.symbolPosition(0, 0);
            ia.placementVictory = true;

        // case 4 et 5
        } else if (app.strokes[1][0] === ia.firstSymbol && app.strokes[1][1] === ia.firstSymbol && app.strokes[1][2] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[5]);
            } else {
                app.createCircle(...ia.gameBox[5]);
            }
            ia.symbolPosition(1, 2);
            ia.placementVictory = true;

        // case 5 et 6
        } else if (app.strokes[1][1] === ia.firstSymbol && app.strokes[1][2] === ia.firstSymbol && app.strokes[1][0] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[3]);
            } else {
                app.createCircle(...ia.gameBox[3]);
            }
            ia.symbolPosition(1, 0);
            ia.placementVictory = true;

        // case 7 et 8
        } else if (app.strokes[2][0] === ia.firstSymbol && app.strokes[2][1] === ia.firstSymbol && app.strokes[2][2] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[8]);
            } else {
                app.createCircle(...ia.gameBox[8]);
            }
            ia.symbolPosition(2, 2);
            ia.placementVictory = true;

        // case 8 et 9
        } else if (app.strokes[2][1] === ia.firstSymbol && app.strokes[2][2] === ia.firstSymbol && app.strokes[2][0] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[6]);
            } else {
                app.createCircle(...ia.gameBox[6]);
            }
            ia.symbolPosition(2, 0);
            ia.placementVictory = true;

        // case 1 et 4
        } else if (app.strokes[0][0] === ia.firstSymbol && app.strokes[1][0] === ia.firstSymbol && app.strokes[2][0] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[6]);
            } else {
                app.createCircle(...ia.gameBox[6]);
            }
            ia.symbolPosition(2, 0);
            ia.placementVictory = true;

        // case 4 et 7
        } else if (app.strokes[1][0] === ia.firstSymbol && app.strokes[2][0] === ia.firstSymbol && app.strokes[0][0] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[0]);
            } else {
                app.createCircle(...ia.gameBox[0]);
            }
            ia.symbolPosition(0, 0);
            ia.placementVictory = true;

        // case 2 et 5
        } else if (app.strokes[0][1] === ia.firstSymbol && app.strokes[1][1] === ia.firstSymbol && app.strokes[2][1] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[7]);
            } else {
                app.createCircle(...ia.gameBox[7]);
            }
            ia.symbolPosition(2, 1);
            ia.placementVictory = true;

        // case 5 et 8
        } else if (app.strokes[1][1] === ia.firstSymbol && app.strokes[2][1] === ia.firstSymbol && app.strokes[0][1] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[1]);
            } else {
                app.createCircle(...ia.gameBox[1]);
            }
            ia.symbolPosition(0, 1);
            ia.placementVictory = true;

        // case 3 et 6
        } else if (app.strokes[0][2] === ia.firstSymbol && app.strokes[1][2] === ia.firstSymbol && app.strokes[2][2] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[8]);
            } else {
                app.createCircle(...ia.gameBox[8]);
            }
            ia.symbolPosition(2, 2);
            ia.placementVictory = true;

        // case 6 et 9
        } else if (app.strokes[1][2] === ia.firstSymbol && app.strokes[2][2] === ia.firstSymbol && app.strokes[0][2] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[2]);
            } else {
                app.createCircle(...ia.gameBox[2]);
            }
            ia.symbolPosition(0, 2);
            ia.placementVictory = true;

        // case 1 et 5
        } else if (app.strokes[0][0] === ia.firstSymbol && app.strokes[1][1] === ia.firstSymbol && app.strokes[2][2] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[8]);
            } else {
                app.createCircle(...ia.gameBox[8]);
            }
            ia.symbolPosition(2, 2);
            ia.placementVictory = true;

        // case 5 et 9
        } else if (app.strokes[1][1] === ia.firstSymbol && app.strokes[2][2] === ia.firstSymbol && app.strokes[0][0] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[0]);
            } else {
                app.createCircle(...ia.gameBox[0]);
            }
            ia.symbolPosition(0, 0);
            ia.placementVictory = true;

        // case 3 et 5
        } else if (app.strokes[0][2] === ia.firstSymbol && app.strokes[1][1] === ia.firstSymbol && app.strokes[2][0] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[6]);
            } else {
                app.createCircle(...ia.gameBox[6]);
            }
            ia.symbolPosition(2, 0);
            ia.placementVictory = true;

        // case 5 et 7
        } else if (app.strokes[1][1] === ia.firstSymbol && app.strokes[2][0] === ia.firstSymbol && app.strokes[0][2] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[2]);
            } else {
                app.createCircle(...ia.gameBox[2]);
            }
            ia.symbolPosition(0, 2);
            ia.placementVictory = true;

        // case 1 et 3
        } else if (app.strokes[0][0] === ia.firstSymbol && app.strokes[0][2] === ia.firstSymbol && app.strokes[0][1] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[1]);
            } else {
                app.createCircle(...ia.gameBox[1]);
            }
            ia.symbolPosition(0, 1);
            ia.placementVictory = true;

        // case 4 et 6
        } else if (app.strokes[1][0] === ia.firstSymbol && app.strokes[1][2] === ia.firstSymbol && app.strokes[1][1] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[4]);
            } else {
                app.createCircle(...ia.gameBox[4]);
            }
            ia.symbolPosition(1, 1);
            ia.placementVictory = true;

        // case 7 et 9
        } else if (app.strokes[2][0] === ia.firstSymbol && app.strokes[2][2] === ia.firstSymbol && app.strokes[2][1] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[7]);
            } else {
                app.createCircle(...ia.gameBox[7]);
            }
            ia.symbolPosition(2, 1);
            ia.placementVictory = true;

        // case 1 et 7
        } else if (app.strokes[0][0] === ia.firstSymbol && app.strokes[2][0] === ia.firstSymbol && app.strokes[1][0] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[3]);
            } else {
                app.createCircle(...ia.gameBox[3]);
            }
            ia.symbolPosition(1, 0);
            ia.placementVictory = true;

        // case 2 et 8
        } else if (app.strokes[0][1] === ia.firstSymbol && app.strokes[2][1] === ia.firstSymbol && app.strokes[1][1] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[4]);
            } else {
                app.createCircle(...ia.gameBox[4]);
            }
            ia.symbolPosition(1, 1);
            ia.placementVictory = true;

        // case 3 et 9
        } else if (app.strokes[0][2] === ia.firstSymbol && app.strokes[2][2] === ia.firstSymbol && app.strokes[1][2] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[5]);
            } else {
                app.createCircle(...ia.gameBox[5]);
            }
            ia.symbolPosition(1, 2);
            ia.placementVictory = true;

        // case 1 et 9
        } else if (app.strokes[0][0] === ia.firstSymbol && app.strokes[2][2] === ia.firstSymbol && app.strokes[1][1] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[4]);
            } else {
                app.createCircle(...ia.gameBox[4]);
            }
            ia.symbolPosition(1, 1);
            ia.placementVictory = true;

        // case 3 et 7
        } else if (app.strokes[0][2] === ia.firstSymbol && app.strokes[2][0] === ia.firstSymbol && app.strokes[1][1] === false) {

            if (app.currentUser) {
                app.createCross(...ia.gameBox[4]);
            } else {
                app.createCircle(...ia.gameBox[4]);
            }
            ia.symbolPosition(1, 1);
            ia.placementVictory = true;

        } else {
            ia.placementVictory = false;
        }
    },

    blockUser: function() {
        if (!ia.placementVictory) {
            // case 1 et 2
            if (app.strokes[0][0] === ia.secondSymbol && app.strokes[0][1] === ia.secondSymbol && app.strokes[0][2] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[2]);
                } else {
                    app.createCircle(...ia.gameBox[2]);
                }
                ia.symbolPosition(0, 2);
                ia.blockedPlayer = true;

            // case 2 et 3
            } else if (app.strokes[0][1] === ia.secondSymbol && app.strokes[0][2] === ia.secondSymbol && app.strokes[0][0] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[0]);
                } else {
                    app.createCircle(...ia.gameBox[0]);
                }
                ia.symbolPosition(0, 0);
                ia.blockedPlayer = true;

            // case 4 et 5
            } else if (app.strokes[1][0] === ia.secondSymbol && app.strokes[1][1] === ia.secondSymbol && app.strokes[1][2] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[5]);
                } else {
                    app.createCircle(...ia.gameBox[5]);
                }
                ia.symbolPosition(1, 2);
                ia.blockedPlayer = true;

            // case 5 et 6
            } else if (app.strokes[1][1] === ia.secondSymbol && app.strokes[1][2] === ia.secondSymbol && app.strokes[1][0] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[3]);
                } else {
                    app.createCircle(...ia.gameBox[3]);
                }
                ia.symbolPosition(1, 0);
                ia.blockedPlayer = true;

            // case 7 et 8
            } else if (app.strokes[2][0] === ia.secondSymbol && app.strokes[2][1] === ia.secondSymbol && app.strokes[2][2] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[8]);
                } else {
                    app.createCircle(...ia.gameBox[8]);
                }
                ia.symbolPosition(2, 2);
                ia.blockedPlayer = true;

            // case 8 et 9
            } else if (app.strokes[2][1] === ia.secondSymbol && app.strokes[2][2] === ia.secondSymbol && app.strokes[2][0] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[6]);
                } else {
                    app.createCircle(...ia.gameBox[6]);
                }
                ia.symbolPosition(2, 0);
                ia.blockedPlayer = true;

            // case 1 et 4
            } else if (app.strokes[0][0] === ia.secondSymbol && app.strokes[1][0] === ia.secondSymbol && app.strokes[2][0] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[6]);
                } else {   
                    app.createCircle(...ia.gameBox[6]);
                }
                ia.symbolPosition(2, 0);
                ia.blockedPlayer = true;

            // case 4 et 7
            } else if (app.strokes[1][0] === ia.secondSymbol && app.strokes[2][0] === ia.secondSymbol && app.strokes[0][0] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[0]);
                } else {
                    app.createCircle(...ia.gameBox[0]);
                }
                ia.symbolPosition(0, 0);
                ia.blockedPlayer = true;

            // case 2 et 5
            } else if (app.strokes[0][1] === ia.secondSymbol && app.strokes[1][1] === ia.secondSymbol && app.strokes[2][1] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[7]);
                } else {
                    app.createCircle(...ia.gameBox[7]);
                }
                ia.symbolPosition(2, 1);
                ia.blockedPlayer = true;

            // case 5 et 8
            } else if (app.strokes[1][1] === ia.secondSymbol && app.strokes[2][1] === ia.secondSymbol && app.strokes[0][1] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[1]);
                } else {
                    app.createCircle(...ia.gameBox[1]);
                }
                ia.symbolPosition(0, 1);
                ia.blockedPlayer = true;
                
            // case 3 et 6
            } else if (app.strokes[0][2] === ia.secondSymbol && app.strokes[1][2] === ia.secondSymbol && app.strokes[2][2] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[8]);
                } else {
                    app.createCircle(...ia.gameBox[8]);
                }
                ia.symbolPosition(2, 2);
                ia.blockedPlayer = true;

            // case 6 et 9
            } else if (app.strokes[1][2] === ia.secondSymbol && app.strokes[2][2] === ia.secondSymbol && app.strokes[0][2] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[2]);
                } else {
                    app.createCircle(...ia.gameBox[2]);
                }
                ia.symbolPosition(0, 2);
                ia.blockedPlayer = true;

            // case 1 et 5
            } else if (app.strokes[0][0] === ia.secondSymbol && app.strokes[1][1] === ia.secondSymbol && app.strokes[2][2] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[8]);
                } else {
                    app.createCircle(...ia.gameBox[8]);
                }
                ia.symbolPosition(2, 2);
                ia.blockedPlayer = true;

            // case 5 et 9
            } else if (app.strokes[1][1] === ia.secondSymbol && app.strokes[2][2] === ia.secondSymbol && app.strokes[0][0] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[0]);
                } else {
                    app.createCircle(...ia.gameBox[0]);
                }
                ia.symbolPosition(0, 0);
                ia.blockedPlayer = true;

            // case 3 et 5
            } else if (app.strokes[0][2] === ia.secondSymbol && app.strokes[1][1] === ia.secondSymbol && app.strokes[2][0] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[6]);
                } else {
                    app.createCircle(...ia.gameBox[6]);
                }
                ia.symbolPosition(2, 0);
                ia.blockedPlayer = true;

            // case 5 et 7
            } else if (app.strokes[1][1] === ia.secondSymbol && app.strokes[2][0] === ia.secondSymbol && app.strokes[0][2] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[2]);
                } else {
                    app.createCircle(...ia.gameBox[2]);
                }
                ia.symbolPosition(0, 2);
                ia.blockedPlayer = true;

            // case 1 et 3
            } else if (app.strokes[0][0] === ia.secondSymbol && app.strokes[0][2] === ia.secondSymbol && app.strokes[0][1] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[1]);
                } else {
                    app.createCircle(...ia.gameBox[1]);
                }
                ia.symbolPosition(0, 1);
                ia.blockedPlayer = true;

            // case 4 et 6
            } else if (app.strokes[1][0] === ia.secondSymbol && app.strokes[1][2] === ia.secondSymbol && app.strokes[1][1] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[4]);
                } else {
                    app.createCircle(...ia.gameBox[4]);
                }
                ia.symbolPosition(1, 1);
                ia.blockedPlayer = true;

            // case 7 et 9
            } else if (app.strokes[2][0] === ia.secondSymbol && app.strokes[2][2] === ia.secondSymbol && app.strokes[2][1] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[7]);
                } else {
                    app.createCircle(...ia.gameBox[7]);
                }
                ia.symbolPosition(2, 1);
                ia.blockedPlayer = true;

            // case 1 et 7
            } else if (app.strokes[0][0] === ia.secondSymbol && app.strokes[2][0] === ia.secondSymbol && app.strokes[1][0] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[3]);
                } else {
                    app.createCircle(...ia.gameBox[3]);
                }
                ia.symbolPosition(1, 0);
                ia.blockedPlayer = true;

            // case 2 et 8
            } else if (app.strokes[0][1] === ia.secondSymbol && app.strokes[2][1] === ia.secondSymbol && app.strokes[1][1] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[4]);
                } else {
                    app.createCircle(...ia.gameBox[4]);
                }
                ia.symbolPosition(1, 1);
                ia.blockedPlayer = true;

            // case 3 et 9
            } else if (app.strokes[0][2] === ia.secondSymbol && app.strokes[2][2] === ia.secondSymbol && app.strokes[1][2] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[5]);
                } else {
                    app.createCircle(...ia.gameBox[5]);
                }
                ia.symbolPosition(1, 2);
                ia.blockedPlayer = true;

            // case 1 et 9
            } else if (app.strokes[0][0] === ia.secondSymbol && app.strokes[2][2] === ia.secondSymbol && app.strokes[1][1] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[4]);
                } else {
                    app.createCircle(...ia.gameBox[4]);
                }
                ia.symbolPosition(1, 1);
                ia.blockedPlayer = true;

            // case 3 et 7
            } else if (app.strokes[0][2] === ia.secondSymbol && app.strokes[2][0] === ia.secondSymbol && app.strokes[1][1] === false) {

                if (app.currentUser) {
                    app.createCross(...ia.gameBox[4]);
                } else {
                    app.createCircle(...ia.gameBox[4]);
                }
                ia.symbolPosition(1, 1);
                ia.blockedPlayer = true;

            } else {
                ia.blockedPlayer = false;
            }
        }
    },

    randomIa: function() {
        let randomNumber = Math.floor(Math.random() * ia.gameBox.length);
            
        if (!ia.blockedPlayer) {

            if (randomNumber === 0 && app.strokes[0][0] === false) {

                app.createCircle(...ia.gameBox[randomNumber]);
                ia.symbolPosition(0, 0);
    
            } else if (randomNumber === 1 && app.strokes[0][1] === false) {
    
                app.createCircle(...ia.gameBox[randomNumber]);
                ia.symbolPosition(0, 1);
    
            } else if (randomNumber === 2 && app.strokes[0][2] === false) {
    
                app.createCircle(...ia.gameBox[randomNumber]);
                ia.symbolPosition(0, 2);
    
            } else if (randomNumber === 3 && app.strokes[1][0] === false) {
    
                app.createCircle(...ia.gameBox[randomNumber]);
                ia.symbolPosition(1, 0);
    
            } else if (randomNumber === 4 && app.strokes[1][1] === false) {
    
                app.createCircle(...ia.gameBox[randomNumber]);
                ia.symbolPosition(1, 1);
    
            } else if (randomNumber === 5 && app.strokes[1][2] === false) {
    
                app.createCircle(...ia.gameBox[randomNumber]);
                ia.symbolPosition(1, 2);
    
            } else if (randomNumber === 6 && app.strokes[2][0] === false) {
    
                app.createCircle(...ia.gameBox[randomNumber]);
                ia.symbolPosition(2, 0);
    
            } else if (randomNumber === 7 && app.strokes[2][1] === false) {
    
                app.createCircle(...ia.gameBox[randomNumber]);
                ia.symbolPosition(2, 1);
    
            } else if (randomNumber === 8 && app.strokes[2][2] === false) {
    
                app.createCircle(...ia.gameBox[randomNumber]);
                ia.symbolPosition(2, 2);
    
            } else {
                ia.randomIa();
            }
        }
    },

    symbolPosition: function(y, x) {
        app.strokes[y][x] = ia.firstSymbol;
        ia.iaCaseY = y;
        ia.iaCaseX = x;
    },
}
