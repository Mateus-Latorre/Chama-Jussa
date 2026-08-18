using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;
using ChamaJussaAPI.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ChamaJussaContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<IOrdemServicoRepository, OrdemServicoRepository>();
builder.Services.AddScoped<IStatusOrdemRepository, StatusOrdemRepository>();
builder.Services.AddScoped<INotificacaoRepository, NotificacaoRepository>();
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();


builder.Services.AddAuthentication(options =>
{
    options.DefaultChallengeScheme = "JwtBearer";
    options.DefaultAuthenticateScheme = "JwtBearer";
})
.AddJwtBearer("JwtBearer", options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        //valida quem está solicitando o token
        ValidateIssuer = true,
        //valida quem irá receber o token
        ValidateAudience = true,
        //Valida a expiração do token
        ValidateLifetime = true,
        //Chave de acesso do token
        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("chamaJussa-chave-autenticacao-webapi-dev")),
        //Tempo de expiração do token
        ClockSkew = TimeSpan.FromMinutes(5),
        //nome do issuer (de onde está vindo)
        ValidIssuer = "api_chamaJussa",
        //nome do audience (para onde ele está indo)
        ValidAudience = "api_chamaJussa"
    };
});
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "Chama Jussa API",
        Description = "Uma API para cadastro de problemas",
        TermsOfService = new Uri("https://example.com/terms"),
        License = new OpenApiLicense
        {
            Name = "Example License",
            Url = new Uri("https://example.com/license")
        }
    });

    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Insira o token JWT:"
    });

    options.AddSecurityRequirement(document => new OpenApiSecurityRequirement
    {
        [new OpenApiSecuritySchemeReference("Bearer", document)] = Array.Empty<string>().ToList()
    });

});

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger(options => { });
    app.UseSwaggerUI(options => {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        options.RoutePrefix = string.Empty;
    });
}

app.UseStaticFiles();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();