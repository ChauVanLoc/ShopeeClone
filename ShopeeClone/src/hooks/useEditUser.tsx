import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-toastify'
import { UserFetching } from 'src/Api/UserFetching'
import { Update } from 'src/types/Update'

function useEditUser() {
  const clientQuery = useQueryClient()
  const EditUser = useMutation({
    mutationFn: (body: Partial<Update>) => UserFetching.UpdateFetching(body),
    onSuccess(data, variables, context) {
      toast.success('🦄 Wow so easy!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: 'colored'
      })
      clientQuery.invalidateQueries({ queryKey: ['user'] })
    }
  })
  return EditUser
}

export default useEditUser
