const zod= require('zod');
const todoSchema = zod.object({
    title: zod.string().min(1, "Title is required"),
    description: zod.string().optional(),
    completed: zod.boolean().default(false)
});
const updatetodoSchema= zod.object({
    id: zod.string().min(1, "ID is required")
});
module.exports = { todoSchema, updatetodoSchema };