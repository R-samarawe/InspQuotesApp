import { Theme } from "@aws-amplify/ui-react";

export const theme:Theme = {
    name : 'firstTheme',
    tokens : {
        components: {
            button : {
                primary:{
                    color: {value : "yellow"}
                }
            }
        }
    }
}