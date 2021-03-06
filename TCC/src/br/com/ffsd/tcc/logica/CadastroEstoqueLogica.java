package br.com.ffsd.tcc.logica;

import java.sql.Connection;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.ffsd.tcc.dao.ProdutoDao;
import br.com.ffsd.tcc.modelo.Produto;

public class CadastroEstoqueLogica implements Logica{

	@Override
	public String executa(HttpServletRequest req, HttpServletResponse resp)
			throws Exception {
		Connection conexao = (Connection) req.getAttribute("conexao");
		
		ProdutoDao produtoDao = new ProdutoDao(conexao);
		List<Produto> produtos = produtoDao.getLista();
		req.setAttribute("produto", produtos);
		
		return "logado/cadastro-estoque.jsp";
	}

}
