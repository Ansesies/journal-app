
import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view"


export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote());

  }

  const { isSaving, active } = useSelector( state => state.journal)

  

  return (

    <JournalLayout>

      
        {/*<Typography>Occaecat mollit dolor tempor quis. Aute reprehenderit esse magna dolore pariatur ad exercitation ea ad commodo do voluptate consequat cupidatat. Labore sint ea in nisi consectetur excepteur proident ex culpa qui consectetur nostrud proident sint. Incididunt non dolore sunt incididunt sunt minim labore qui dolor velit. Exercitation deserunt fugiat ex tempor eu cupidatat culpa consequat ad nulla esse sint magna. Commodo veniam non sit mollit dolor proident. Nostrud laborum ut culpa aliqua laboris sunt est deserunt.</Typography> */}
        
        {
          (!!active)
          ? <NoteView/>
          : <NothingSelectedView/>
        }
         
        {/*
           */}
        
        <IconButton
          onClick={ onClickNewNote }
          size='large'
          disabled={ isSaving }
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9},
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }}/>
        </IconButton>
        {/* nothing selected*/}

    </JournalLayout>
  )
}
