import { For } from "solid-js";
import * as m from "../../../paraglide/messages";

export default function TeamGrid() {
  const members = () => [
    {
      name: m.team_grid_member1Name(),
      role: m.team_grid_member1Role(),
      bio: m.team_grid_member1Bio(),
    },
    {
      name: m.team_grid_member2Name(),
      role: m.team_grid_member2Role(),
      bio: m.team_grid_member2Bio(),
    },
    {
      name: m.team_grid_member3Name(),
      role: m.team_grid_member3Role(),
      bio: m.team_grid_member3Bio(),
    },
    {
      name: m.team_grid_member4Name(),
      role: m.team_grid_member4Role(),
      bio: m.team_grid_member4Bio(),
    },
    {
      name: m.team_grid_member5Name(),
      role: m.team_grid_member5Role(),
      bio: m.team_grid_member5Bio(),
    },
    {
      name: m.team_grid_member6Name(),
      role: m.team_grid_member6Role(),
      bio: m.team_grid_member6Bio(),
    },
  ];

  return (
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <For each={members()}>
        {(item) => (
          <div class="rounded-lg border border-border bg-card p-6 text-center">
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
              {item.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <h3 class="text-base font-semibold text-foreground">{item.name}</h3>
            <p class="mb-2 text-xs font-medium text-primary">{item.role}</p>
            <p class="text-sm text-muted-foreground">{item.bio}</p>
          </div>
        )}
      </For>
    </div>
  );
}

