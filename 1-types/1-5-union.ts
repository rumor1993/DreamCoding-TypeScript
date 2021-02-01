{
    /**
     * Union Types: OR
     */

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction)
    }

    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // function: login -> success, fail
    type LoginState = SuccessState | FailState
    type SuccessState = {
        response: {
            body: string;
        }
    }
    type FailState = {
        reason: string;
    }



    function login(): LoginState {
        return {
            response: {
                body: 'logged in'
            }
        }
    }


    function printLoginState(state: LoginState):void {
        if("response" in state) {
            console.log(`${state.response.body}`)
        } else {
            console.log(state.reason)
        }
    }

}