import { italiano } from './italiano.ts';
import type { Course } from './types.ts';

export * from './types.ts';

/** Cursos disponíveis, pelo id gravado no progresso. */
export const COURSES: Record<string, Course> = { [italiano.id]: italiano };

export function getCourse(id: string): Course | null {
	return COURSES[id] ?? null;
}

export function getLesson(course: Course, no: number) {
	return course.lessons.find((l) => l.no === no) ?? null;
}
