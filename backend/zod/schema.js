const zod= require('zod');
const todoSchema = zod.object({
    title: zod.string().min(1, "Title is required"),
    description: zod.string().optional(),
    completed: zod.boolean().default(false)
});
module.exports = { todoSchema };