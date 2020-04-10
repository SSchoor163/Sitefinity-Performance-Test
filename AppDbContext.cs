using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SitefinityPerformaceTest.Models;

namespace SitefinityPerformaceTest
{
    public class AppDbContext:DbContext
    {
        public DbSet<Company> Companies { get; set; }
        public DbSet<GtMetrics> GtMetrics { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        public AppDbContext(DbContextOptions<AppDbContext> options)
  : base(options)
        {
        }
    }
}

