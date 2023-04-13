using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamOn.Domain.Store.Entities;

namespace TeamOn.Infra.Contexts
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<HumourContext> options) : base(options) { }

        public DbSet<StoreItem> Store { get; set; }
    }
}
