<script>
	export let data;
	console.log(data)
</script>

<div class="min-h-screen bg-base-200">
  <div class="hero-content flex-col">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Your Tasks</h1>
    </div>
    <div class="card flex shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control flex flex-row gap-5">
          <input type="text" placeholder="task" class="input input-bordered" />
		   <button class="btn btn-primary">
      			<a href="/add">Add</a>
    		</button>
			<button class="btn btn-primary">
      			<a href="/edit">Edit</a>
    		</button>
        </div>
       </div>
    </div>
  </div>
</div>
