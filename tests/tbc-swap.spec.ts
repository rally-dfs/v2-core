import * as anchor from '@project-serum/anchor'

describe('tbc-swap', () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env())

  it('Is initialized!', async () => {
    // Add your test here.
    const program = anchor.workspace.TbcSwap
    const tx = await program.rpc.initialize()
    console.log('Your transaction signature', tx)
  })
})
