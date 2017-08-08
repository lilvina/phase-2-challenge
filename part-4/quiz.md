- When you run a command in the terminal, where does BASH look for that command?
  - The user's path directory
- On a UNIX computer, how do you stop a running process?
  - Using the kill command
- What packages do you have installed via homebrew?
  - NPM and Postgres
- On a UNIX computer, how do you find the process id of a running process?
  - use the ucbps command
- In a terminal, what does control-c do?
  - Kills a running process
- What would be the result of typing the following commands?
```sh
$ cd /Users/steve - If you type cd /Users/steve, you get no such file or directory.
$ mkdir foo - Create a new directory called foo
$ touch bar - create a new file called bar
$ cd foo - change directory into foo
$ touch bar - creates a text file inside of foo
$ pwd - /Users/davinataylor/foo
```
- How do you set an environment variable in your shell?
  - env myVar = "Value"
- What keyboard shortcut do you use to split the screen in your editor?
  - +
- How do you create an alias in your shell?
  - gedit ~/.bashrc, then add 'alias' and execute '.~/.bashrc'
- When a terminal command completes, how can you tell if it was successful or not?
  - Whenever the next input line appears.
- What does your `~/.gitconfig` have in it? (paste the whole file here)
- What is the difference between a relative and absolute path?
  - absolute path starts from the root directory
  - relative path starts from current directory
- Lets say you have the following file structure
  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```
And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?
  - cp README.md ../pinterest-for-dogs
- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
  - Cmd+O
- What files or folders do you want all git repositories to ignore?
  - node_modules .env
- What is the main difference between `Array.map` and `Array.forEach` in JavaScript?
  - map iterates a function over each item in an array and returns a new array. forEach iterates a function over each item in the array but doesn't return a new array.