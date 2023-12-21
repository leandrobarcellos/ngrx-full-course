import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { BookModel, calculateBooksGrossEarnings } from '../../shared/models';
import { BooksPageActions, BooksApiActions } from '../../books/actions';
