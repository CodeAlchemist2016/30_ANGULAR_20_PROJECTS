import { describe, it, expect } from 'vitest';
import { TodoList } from './todo-list';

describe('TodoList Component', () => {
  let component: TodoList;

  beforeEach(() => {
    component = new TodoList();
  });

  describe('addTask method', () => {
    it('adds a task when newTask is not empty', () => {
      component.newTask = 'Buy milk';
      component.addTask();
      expect(component.tasks).toContain('Buy milk');
      expect(component.newTask).toBe('');
    });

    it('clears newTask when input is empty after trimming', () => {
      component.newTask = '  ';
      component.addTask();
      expect(component.tasks).toEqual([]);
      expect(component.newTask).toBe('');
    });
  });

  describe('removeTask method', () => {
    it('removes the task at the specified index', () => {
      component.tasks = ['Buy milk', 'Do laundry'];
      component.removeTask(0);
      expect(component.tasks).toContain('Do laundry');
      expect(component.tasks).not.toContain('Buy milk');
    });

    it('does nothing for invalid indices', () => {
      component.tasks = ['Buy milk'];
      component.removeTask(1);
      expect(component.tasks).toContain('Buy milk');
    });
  });
});
