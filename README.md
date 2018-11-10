# open-weather-map

Getting Started with open-weather-map

Download '**_Vagrantfile_**'.

Pre-requisites  \
Git \
Vagrant \
Virtualbox \
java "1.8.0_161" or Higher version

# Setup Virtual machine
Run Below commands in the folder where '**_Vagrantfile_**' is located
```
vagrant up
vagrant ssh
```

List and Search for '**_open-weather-map_**' If you does not see '**_open-weather-map_**' folder then follow below steps
```
git clone https://github.com/prankur003/open-weather-map.git
cd open-weather-map
npm install
npm run e2e-test -- --env chrome
```

If you face issue like this
```
Error: Uncaught, unspecified "error" event. ([object Object])
```

Then setup browser using below commands
```
sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | sudo tee /etc/apt/sources.list.d/google-chrome.list 
sudo apt-get update
sudo apt-get install google-chrome-stable
```

# Run Test

Command to Execute single feature file
```
./node_modules/gulp-v4/bin/gulp.js singleFile --option features/web/acceptanceCriteria.feature
```


# Report

Command to generate report
```
./node_modules/gulp-v4/bin/gulp.js cucumberReports
```
Then Go to `reports` folder and open `index.html`
