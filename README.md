# 1.	OBJETIVO
=============

   Esss aplicação como funcionalidade registrar as receba uma requisição HTTP com os seguintes parâmetros listados abaixo:

  - Componente: Componente que está em processo de deploy
  - Versão: Versão que está sendo entregue
  - Responsável: Nome do membro do time de engenharia que está realizando o processo de deploy
  - Status: Status do processo de deploy
	
	

# 2. FUNCIONALIDADES 
==================

    Acesando a Aplicação 0.0.0.0:5001 
	
	Fazendo uma chamada 0.0.0.0:5001/Deploy POST e passando os paramentros Componente, Versao,  Responsável, Status ele registra no MongoDB.
	
	Depois de Registrado os dados podem ser exportados via csv fazendo uma chamada get no Browser 0.0.0.0:5001/Deploy/export 
