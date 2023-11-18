# expo-template
React native with expo initial template
Use Eslint and Prettier, it is recommended to have these extensions installed. Prettier can be configured to format the code when the file is saved:
vscode -> preferences -> Editor: format on save
Format on save mode: modifications
contais the folder structure for a medium size application as:
  src/
    | assets
    | components
    | context
    | data
    | hooks
    | lib
    | pages
    | styles
    | utils


When adding variables in the .env file, you need to declare the variables types in ./src/types/ev.d.ts to work with typescript.

To obtain the firebase's config follow this documentation and set it in the .env.example file's formate
https://support.google.com/firebase/answer/7015592?hl=es#zippy=%2Cen-este-art%C3%ADculo