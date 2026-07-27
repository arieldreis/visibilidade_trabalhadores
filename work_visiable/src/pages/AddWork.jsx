import '../styles/index.css'
import Header from '../components/Header';
import { useState } from 'react';

const CATEGORIAS = [
  'Reformas e Reparos',
  'Limpeza',
  'Aulas e Cursos',
  'Beleza e Estética',
  'Tecnologia',
  'Eventos',
  'Outros',
];

const FAIXAS_PRECO = [
  'A combinar',
  'Até R$ 50',
  'R$ 50 - R$ 150',
  'R$ 150 - R$ 300',
  'Acima de R$ 300',
];

const AddWork = () => {
  const [form, setForm] = useState({
      titulo: '',
      nome: '',
      categoria: '',
      whatsapp: '',
      faixaPreco: 'A combinar',
      cidade: '',
      estado: '',
      descricao: '',
      foto: null,
    });
  
    const handleChange = (field) => (e) => {
      const value = field === 'foto' ? e.target.files?.[0] ?? null : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // TODO: integrar com a API (POST /servicos)
      console.log('Publicando serviço:', form);
    };
  return (
    <div className="anunciar-page">
      <Header />
      <main className="anunciar-main">
        <form className="anunciar-card" onSubmit={handleSubmit}>
          <div className="anunciar-card__title">
            <span className="anunciar-card__icon">+</span>
            <div>
              <h1>Anunciar Serviço</h1>
              <p>Preencha os dados abaixo para divulgar seu talento</p>
            </div>
          </div>

          <div className="anunciar-grid">
            <div className="anunciar-field">
              <label htmlFor="titulo">Título do serviço *</label>
              <input
                id="titulo"
                type="text"
                placeholder="Ex: Conserto de torneiras"
                value={form.titulo}
                onChange={handleChange('titulo')}
                required
              />
            </div>

            <div className="anunciar-field">
              <label htmlFor="nome">Seu nome *</label>
              <input
                id="nome"
                type="text"
                placeholder="Seu nome completo"
                value={form.nome}
                onChange={handleChange('nome')}
                required
              />
            </div>

            <div className="anunciar-field">
              <label htmlFor="categoria">Categoria *</label>
              <select
                id="categoria"
                value={form.categoria}
                onChange={handleChange('categoria')}
                required
              >
                <option value="" disabled>
                  Selecione a categoria
                </option>
                {CATEGORIAS.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="anunciar-field">
              <label htmlFor="whatsapp">WhatsApp (com DDD) *</label>
              <input
                id="whatsapp"
                type="tel"
                placeholder="Ex: 11999999999"
                value={form.whatsapp}
                onChange={handleChange('whatsapp')}
                required
              />
            </div>

            <div className="anunciar-field">
              <label htmlFor="faixaPreco">Faixa de Preço</label>
              <select
                id="faixaPreco"
                value={form.faixaPreco}
                onChange={handleChange('faixaPreco')}
              >
                {FAIXAS_PRECO.map((faixa) => (
                  <option key={faixa} value={faixa}>
                    {faixa}
                  </option>
                ))}
              </select>
            </div>

            <div className="anunciar-field">
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                type="text"
                placeholder="Sua cidade"
                value={form.cidade}
                onChange={handleChange('cidade')}
              />
            </div>

            <div className="anunciar-field">
              <label htmlFor="estado">Estado</label>
              <input
                id="estado"
                type="text"
                placeholder="Ex: SP"
                maxLength={2}
                value={form.estado}
                onChange={handleChange('estado')}
              />
            </div>
          </div>

          <div className="anunciar-field anunciar-field--full">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              placeholder="Descreva seu serviço, experiência, diferenciais..."
              rows={4}
              value={form.descricao}
              onChange={handleChange('descricao')}
            />
          </div>

          <div className="anunciar-field anunciar-field--full">
            <label>Foto do serviço</label>
            <label className="anunciar-upload" htmlFor="foto">
              <span aria-hidden="true">⬆</span>
              {form.foto ? form.foto.name : 'Escolher foto'}
            </label>
            <input
              id="foto"
              type="file"
              accept="image/*"
              onChange={handleChange('foto')}
              hidden
            />
          </div>

          <button type="submit" className="anunciar-submit">
            Publicar Serviço
          </button>
        </form>
      </main>
    </div>
  )
}

export default AddWork
