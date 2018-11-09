Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.provider "virtualbox" do |vb|
      vb.gui = false
      vb.customize ["modifyvm", :id, "--memory", "2048", "--cpus", "2"]
    end

    config.vm.provision "shell", privileged: false, inline: <<-SHELL
     
      sudo add-apt-repository ppa:openjdk-r/ppa -y
      sudo apt-get update
      sudo echo "\n----- Installing Apache and Java 8 ------\n"
      sudo apt-get -y install openjdk-8-jdk
      sudo update-alternatives --config java
      sudo apt-get install -y git
      sudo curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
      sudo apt-get install -y nodejs
      sudo apt-get install -y firefox
      sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 
      sudo echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | sudo tee /etc/apt/sources.list.d/google-chrome.list 
      sudo apt-get update
      sudo apt-get -y install google-chrome-stable xvfb unzip
      sudo apt-get update
      sudo apt-get upgrade -y
      sudo apt-get autoremove -y
      if [ ! -d "open-weather-map" ]; then
        git clone https://github.com/prankur003/open-weather-map.git
      fi
      cd open-weather-map
      sudo npm install -g npm
      npm install
   SHELL
end
