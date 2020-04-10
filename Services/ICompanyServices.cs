using System.Collections.Generic;
using SitefinityPerformaceTest.Models;

namespace SitefinityPerformaceTest.Services
{
    public interface ICompanyServices
    {
        Company Add(Company company);
        Company Get(int id);
        IEnumerable<Company> GetAll();
        void Remove(int id);
        Company Update(Company company);
    }
}