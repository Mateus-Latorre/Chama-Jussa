using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaAPI.Models;

public partial class ChamaJussaContext : DbContext
{
    public ChamaJussaContext()
    {
    }

    public ChamaJussaContext(DbContextOptions<ChamaJussaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Notificacao> Notificacoes { get; set; }

    public virtual DbSet<OrdemServico> OrdemServicos { get; set; }

    public virtual DbSet<StatusOrdem> StatusOrdems { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=chamaJussadb;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Notificacao>(entity =>
        {
            entity.HasKey(e => e.IdNotificacao).HasName("PK__Notifica__4955F61D83FA4580");

            entity.ToTable("Notificacao");

            entity.Property(e => e.IdNotificacao).HasColumnName("idNotificacao");
            entity.Property(e => e.DataCriacao)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("dataCriacao");
            entity.Property(e => e.IdUsuario)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("idUsuario");
            entity.Property(e => e.Lida)
                .HasDefaultValue(false)
                .HasColumnName("lida");
            entity.Property(e => e.Mensagem)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("mensagem");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Notificacaos)
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Notificac__idUsu__72C60C4A");
        });

        modelBuilder.Entity<OrdemServico>(entity =>
        {
            entity.HasKey(e => e.IdServico).HasName("PK__OrdemSer__0E3EA441B50F1C57");

            entity.ToTable("OrdemServico");

            entity.Property(e => e.IdServico)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("idServico");
            entity.Property(e => e.DataCriacao)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Descricao)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.Equipamento)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.FotoUrl)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("FotoURL");
            entity.Property(e => e.IdStatus)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValue("Aberta")
                .HasColumnName("idStatus");
            entity.Property(e => e.IdUsuario)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("idUsuario");
            entity.Property(e => e.Lugar)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Titulo)
                .HasMaxLength(100)
                .IsUnicode(false);

            entity.HasOne(d => d.IdStatusNavigation).WithMany(p => p.OrdemServicos)
                .HasForeignKey(d => d.IdStatus)
                .HasConstraintName("fk_StatusOrdem");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.OrdemServicos)
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_Usuario");
        });

        modelBuilder.Entity<StatusOrdem>(entity =>
        {
            entity.HasKey(e => e.IdStatus).HasName("PK__StatusOr__01936F7404007839");

            entity.ToTable("StatusOrdem");

            entity.Property(e => e.IdStatus)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("idStatus");
            entity.Property(e => e.Descricao)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuario__645723A60AE5D386");

            entity.ToTable("Usuario");

            entity.HasIndex(e => e.Email, "UQ__Usuario__A9D10534700C1660").IsUnique();

            entity.Property(e => e.IdUsuario)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("idUsuario");
            entity.Property(e => e.Email)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.Nome)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Senha)
                .HasMaxLength(60)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
