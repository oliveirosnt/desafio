# Para rodar o teste criado

## Fazer setup do projeto
```
npm install
```

### Colocar projeto para rodar localmente
```
npm run serve
```

Em outro terminal, chegar até a pasta raiz do projeto e dar o seguinte comando:

### Abrir o cypress no windows
```
npx cypress open
```

### Abrir o cypress no ubuntu
```
node_modules/cypress/bin/cypress open
```

Com o cypress aberto, selecionar a pasta "tests" e depois dar duplo clique no arquivo "fluxo_principal.spec.js".
O navegador deve abrir e o cypress deve executar o caso de teste automatizado com sucesso.
