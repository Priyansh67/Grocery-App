using BusinessLogicLayer.Classes;
using BusinessLogicLayer.Interfaces;
using DataAccessLayer.Classes;
using DataAccessLayer.Interfaces;
using DataAccessLayer.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<GroceryStoreDBContext>();
builder.Services.AddTransient<IAdminDAL, AdminDAL>();
builder.Services.AddTransient<IAdminBLL, AdminBLL>();
builder.Services.AddTransient<ICustomerBLL, CustomerBLL>();
builder.Services.AddTransient<ICustomerDAL, CustomerDAL>();
builder.Services.AddTransient<ICartDAL, CartDAL>();
builder.Services.AddTransient<ICartBLL, CartBLL>();
builder.Services.AddTransient<IOrderDAL, OrderDAL>();
builder.Services.AddTransient<IOrderBLL, OrderBLL>();
builder.Services.AddTransient<IProductDAL, ProductDAL>();
builder.Services.AddTransient<IProductBLL, ProductBLL>();
builder.Services.AddTransient<DataSeeder>();


builder.Services.AddCors(options => options.AddPolicy(name: "GroceryStore",
    policy =>
    {
        policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
    }
    ));

var app = builder.Build();

if (args.Length == 1 && args[0].ToLower() == "seeddata")
{
    SeedData(app);
}

void SeedData(IHost app)
{
    var scopedFactory = app.Services.GetService<IServiceScopeFactory>();
    using (var scope = scopedFactory.CreateScope())
    {
        var service = scope.ServiceProvider.GetService<DataSeeder>();
        service.Seed();
    }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("GroceryStore");

app.UseAuthorization();

app.MapControllers();

app.Run();
