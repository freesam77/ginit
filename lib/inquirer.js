const inquirer = require('inquirer')

module.exports = {
    askGithubCredentials: () => {
        const questions = [
            {
                name: 'username',
                type: 'input',
                message: 'Enter your GitHub username or e-mail address:',
                validate: (val) => {
                    if(val.length){
                        return true
                    }else{
                        return 'Please enter your username or e-mail address'
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                message: 'Enter your password',
                validate: (val) => {
                    if(val.length){
                        return true
                    }else{
                        return 'Please enter your password.'
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    }
}