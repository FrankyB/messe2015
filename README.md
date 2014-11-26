messe2015
=========

Install:

- nodejs von http://www.nodejs.org/download/ laden (.tar-Archiv) und entspr. Link kopieren
  cd ~
  mkdir program
  cd  program
  wget 'http://nodejs.org/dist/v0.10.33/node-v0.10.33-linux-x64.tar.gz'
  tar xzvf node-v0.10.33-linux-x64.tar.gz
  ln -s node-v0.10.33-linux-x64 node
 
- in ~/.bashrc den Pfad auf node/bin anhängen:
  
  export PATH=$PATH:~/program/node/bin
  
- ausloggen / einloggen

- 
  mkdir ~/svr
  cd svr
  git clone https://github.com/FrankyB/messe2015.git
  cd  messe2015
  bash install.sh


Start;  
  um das Projekt weiterhin zu aktualisieren & den Server zu starten ist nur folgendes notwendig:
  Einloggen,
 
  cd  ~/svr/messe2015
  bash install.sh
  
Benutzung:
  Browser öffnen auf localhost:8000
