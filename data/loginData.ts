export const loginData=[
    {
        username:'standard_user',
        password:'secret_sauce',
        expected:'success'
    },
    {
        username:'locked_out_user',
        password:'secret_sauce',
        expected:'error'
    },
    {
        username:'standard_user',
        password:'wrong_pass',
        expected:'error'
    }
]