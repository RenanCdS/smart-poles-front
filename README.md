# SmartPoles FRONT
Aplicação front que controla e gerencia os cluster de postes inteligentes dentro de um condomínio. A ideia é que esses postes controlem a luminosidade do condomínio com base no fluxo de pessoas e colete dados de IOT (umidade e dados sonoros por exemplo). Para tal existe registros de usuários, condomínios e postes. O usuário pode ter uma de duas roles:

- NORMAL => Tem acesso à visualização do cluster de postes inteligentes vinculados ao condomínio do usuário
- ADM => Capaz de gerenciar todos os recursos do sistema (postes, condominios e outros usuários)

No momento a aplicação só gerencia os postes. No futuro será integrado com o sistema Helix para exibir os dados de IOT.
A aplicação foi desenvolvida em Angular. É necessário instalar o [nodejs](https://nodejs.org/en/) para rodar a aplicação.
Com o node instalado entre na pasta onde o arquivo "package.json" e execute o comando "**npm install**". Com isso as dependências do projeto serão baixadas. Em           seguida, ainda no diretório que o package.json está, execute o comando "**npm start**". A aplicação rodará em **localhost:4200**.

Esse front consome a API que está no seguinte repositório [Backend](https://github.com/RenanCdS/smart-poles-back).

**EC9 - FESA**

## Integrantes

RACHEL MOREIRA 081180045  
RENAN CASTRO 081180029  
WELLISON SOUSA 081180040  
WESLEY ROGÉRIO 081180035  
