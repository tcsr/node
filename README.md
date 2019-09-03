# node


https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize#toc-retrieving-a-single-todo


npm --add-python-to-path='true' --debug install --global windows-build-tools


 if installation process is taking longer than expected please verify the the installation log


%USERPROFILE%\.windows-build-tools\
if you have oracle client installed already, make sure the PATH variable has the location, if not you can install the instant client using npm. 

npm install instantclient

set PATH=%cd%\instantclient;%PATH%

set OCI_LIB_DIR=%cd%\instantclient\sdk\lib\msvc

set OCI_INC_DIR=%cd%\instantclient\sdk\include

npm install oracledb
