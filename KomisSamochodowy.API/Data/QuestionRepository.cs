using System.Collections.Generic;
using System.Threading.Tasks;
using KomisSamochodowy.API.Helpers;
using KomisSamochodowy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace KomisSamochodowy.API.Data
{
    public class QuestionRepository: GenericRepository, IQuestionRepository
    {
        private readonly DataContext context;

        public QuestionRepository(DataContext context): base(context)
        {
            this.context = context;           
        }

        public async Task<Question> GetQuestion(int id)
        {
            var question =  await context.Question.FirstOrDefaultAsync(q => q.Id == id);
            return question;
        }

        public async Task<IEnumerable<Question>> GetQuestions()
        {
            return await context.Question.ToListAsync();
        }
    }
}