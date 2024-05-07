import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ id, name, number }) {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
