<script>
	export let dbData;
	console.log(dbData,'recd')
</script>


<div class="overflow-x-auto">
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>ID</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
	{#each dbData as line}
				<tr>
					<td>
						<div>
							<div class="font-bold">{line.todo_id}</div>
						</div>
					</td>
					<td>
						{line.description}
					</td>
					<th>
						<form method="POST" action="?/delete">
							<input type="hidden" name="id" hidden value={line.todo_id} />
							<button class="btn btn-error text-white btn-xs">Delete</button>
						</form>
					</th>
				</tr>
			{/each}
    </tbody>
  </table>
</div>